// Libraries
import { FC, useEffect, useState } from 'react';

// Components
import MetricsSection from '../metrics-section';
import MetricsCard from '../metrics-card';
import MetricsCardValue from '../metrics-card-value';

// Utilities
import { ChartData, MetricsData } from '../../types';
import { getSecondsFromType } from '../../utils/getTime';
import DonutChart from '../donut-chart';
import { colors } from '../../theme';



interface DowntimeSectionProps {
    data: MetricsData[];
    onChartClick: (id: string) => void;
}

/**
 * Down Time section, composed of Metrics data and chart representation
 */
const DowntimeSection: FC<DowntimeSectionProps> = ({ data, onChartClick }) => {
    const [unexplained, setUnexplained] = useState<MetricsData>();
    const [mechProblems, setMechProblems] = useState<MetricsData>();

    const [chartValues, setChartValues] = useState<ChartData[]>();

    useEffect(() => {
        data.forEach(d => {
            if (d.id === 'unexplained') {
                setUnexplained(d);
            }
            if (d.id === 'mech_problems') {
                setMechProblems(d);
            }
        });
    }, [data]);

    useEffect(() => {
        const percentageData = setChartData();

        if (percentageData) {
            setChartValues(percentageData);
        }

    }, [mechProblems, unexplained]);

    /**
     * Creates the data for the Chart
     */
    const setChartData = () => {
        if (unexplained && mechProblems) {
            const total = mechProblems.value + unexplained.value;

            const mechProblemsValueInSeconds = getSecondsFromType(mechProblems.value, mechProblems.type);
            const unexplainedValueInSeconds = getSecondsFromType(unexplained.value, unexplained.type);

            const mechProblemsPercentage = mechProblemsValueInSeconds / total;
            const unexplainedPercentage = unexplainedValueInSeconds / total;

            return [
                {
                    id: unexplained.id,
                    angle: mechProblemsPercentage,
                    label: unexplained.label,
                    style: {
                        fill: colors.orange,
                        stroke: colors.transparent
                    }
                },
                {
                    id: mechProblems.id,
                    angle: unexplainedPercentage,
                    label: mechProblems.label,
                    style: {
                        fill: colors.red,
                        stroke: colors.transparent
                    }
                }
            ];
        }
    };

    return (
        <MetricsSection
                title="Down Time"
                renderMetrics={() => (
                    <MetricsCard>
                        {unexplained ? (
                            <MetricsCardValue
                                aria-label={unexplained.description}
                                title={unexplained.label}
                                value={unexplained.value}
                                type={unexplained.type}
                            />
                        ) : null}
                        {mechProblems ? (
                            <MetricsCardValue
                                aria-label={mechProblems.description}
                                title={mechProblems.label}
                                type={mechProblems.type}
                                value={mechProblems.value}
                            />
                        ) : null}
                    </MetricsCard>
                )}
                renderChart={() => (
                    chartValues ? (
                        <DonutChart
                            onChartClick={onChartClick}
                            data={chartValues}
                        />
                    ): null
                )}
            />
    );
}

export default DowntimeSection;