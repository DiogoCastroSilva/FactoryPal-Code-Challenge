// Libraries
import { FC, useEffect, useState } from 'react';
import { RadialChart } from 'react-vis';

// Components
import MetricsSection from '../metrics-section';
import MetricsCard from '../metrics-card';
import MetricsCardValue from '../metrics-card-value';

// Utilities
import { Base, MetricsData } from '../../types';
import { getColorByCategory } from '../../utils/getColor';
import { getSecondsFromType } from '../../utils/getTime';


interface ChartData extends Base {
    angle: number;
    label: string;
    style: {
        fill: string;
    }
};

interface ShiftSectionProps {
    data: MetricsData[];
    onChartClick: (id: string) => void;
}

/**
 * Shift section, composed of Metrics data and chart representation
 * @param data: Shift metrics data
 */
const ShiftSection: FC<ShiftSectionProps> = ({ data, onChartClick }) => {
    const [clnShift, seClnShift] = useState<MetricsData>();
    const [shiftDuration, setShiftDuration] = useState<MetricsData>();

    const [chartValues, setChartValues] = useState<ChartData[]>();

    useEffect(() => {
        data.forEach(d => {
            if (d.id === 'cln_shift') {
                seClnShift(d);
            }
            if (d.id === 'shift_duration') {
                setShiftDuration(d);
            }
        });
    }, [data]);

    useEffect(() => {
        const percentageData = setChartData();

        if (percentageData) {
            setChartValues(percentageData.map(percentage => ({
                id: percentage.id,
                angle: percentage.percentage,
                label: percentage.label,
                style: {
                    fill: percentage.fill,
                    stroke: 'transparent'
                }
            })));
        }

    }, [clnShift, shiftDuration]);

    const setChartData = () => {
        if (clnShift && shiftDuration) {
            const clShiftValueInSeconds = getSecondsFromType(clnShift.value, clnShift.type);
            const shiftDurationInSeconds = getSecondsFromType(shiftDuration.value, shiftDuration.type);

            const clShiftPercentage = clShiftValueInSeconds / shiftDurationInSeconds;

            return [
                {
                    percentage: clShiftPercentage,
                    fill: getColorByCategory('shift'),
                    ...clnShift
                },
                {
                    percentage: 1 - clShiftPercentage,
                    fill: getColorByCategory(),
                    ...shiftDuration
                }
            ];
        }
    };

    return (
        <MetricsSection
            title='Shift'
            renderMetrics={() => (
                <MetricsCard>
                    {clnShift ? (
                        <MetricsCardValue
                            aria-label={clnShift.description}
                            title={clnShift.label}
                            value={clnShift.value}
                            type={clnShift.type}
                        />
                    ) : null}
                    {shiftDuration ? (
                        <MetricsCardValue
                            aria-label={shiftDuration.description}
                            title={shiftDuration.label}
                            type={shiftDuration.type}
                            value={shiftDuration.value}
                        />
                    ) : null}
                </MetricsCard>
            )}
            renderChart={() => (
                chartValues ? (
                    <RadialChart
                            height={200}
                            width={200}
                            showLabels={true}
                            onValueClick={(e) => {
                                console.log(e);
                                if (e && e.id) {
                                    onChartClick(e.id)
                                }
                            }}
                            data={chartValues}
                    />
                ) : null
            )}
        />
    );
}

export default ShiftSection;