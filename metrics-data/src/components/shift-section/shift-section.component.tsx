// Libraries
import { FC, useEffect, useState } from 'react';
import { RadialChart } from 'react-vis';

// Components
import MetricsSection from '../metrics-section';
import MetricsCard from '../metrics-card';
import MetricsCardValue from '../metrics-card-value';

// Utilities
import { ChartData, MetricsData } from '../../types';
import { getColorByCategory } from '../../utils/getColor';
import { getSecondsFromType } from '../../utils/getTime';


interface ShiftSectionProps {
    data: MetricsData[];
    onChartClick: (id: string) => void;
}

/**
 * Shift section, composed of Metrics data and chart representation
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
            setChartValues(percentageData);
        }

    }, [clnShift, shiftDuration]);

    /**
     * Creates the data for the Chart
     */
    const setChartData = () => {
        if (clnShift && shiftDuration) {
            const clShiftValueInSeconds = getSecondsFromType(clnShift.value, clnShift.type);
            const shiftDurationInSeconds = getSecondsFromType(shiftDuration.value, shiftDuration.type);

            const clShiftPercentage = clShiftValueInSeconds / shiftDurationInSeconds;

            return [
                {
                    id: clnShift.id,
                    angle: clShiftPercentage,
                    label: clnShift.label,
                    style: {
                        fill: getColorByCategory('shift'),
                        stroke: 'transparent'
                    }
                },
                {
                    id: shiftDuration.id,
                    angle: 1 - clShiftPercentage,
                    label: shiftDuration.label,
                    style: {
                        fill: getColorByCategory(),
                        stroke: 'transparent'
                    }
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