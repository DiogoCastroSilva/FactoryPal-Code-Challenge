// Libraries
import { FC, useEffect, useState } from 'react';

// Components
import MetricsCardValue from '../metrics-card-value';
import DonutChart from '../donut-chart'
import MetricsSection from '../metrics-section';

// Utilities
import { MetricsData } from '../../types';
import MetricsCard from '../metrics-card';
import { colors } from '../../theme';



interface EfficiencySectionProps {
    data: MetricsData[];
    onChartClick: (id: string) => void;
}

/**
 * Efficiency section, composed of Metrics data and chart representation
 */
const EfficiencySection: FC<EfficiencySectionProps> = ({ data, onChartClick }) =>{
    const [oee, setOEE] = useState<MetricsData>();
    const [sl, setSL] = useState<MetricsData>();
    const [lbp, setLBP] = useState<MetricsData>();


    useEffect(() => {
        data.forEach(d => {
           if (d.id === 'oee') {
                setOEE(d);
           }
           if (d.id === 'sl') {
                setSL(d);
           }
           if (d.id === 'lbp') {
                setLBP(d);
           }
        });
    }, [data]);

    return <MetricsSection
                title="Efficiency"
                renderMetrics={() => (
                    <MetricsCard>
                        {oee ? (
                            <MetricsCardValue
                                aria-label={oee.description}
                                title={oee.label}
                                value={oee.value}
                                goal={80}
                                type={'%'}
                                showIcon
                            />
                        ) : null}
                        {sl ? (
                            <MetricsCardValue
                                aria-label={sl.description}
                                title={sl.label}
                                goal={-15}
                                value={sl.value}
                                showIcon
                            />
                        ) : null}
                        {lbp ? (
                            <MetricsCardValue
                                aria-label={lbp.description}
                                title={lbp.label}
                                goal={-180}
                                value={lbp.value}
                                showIcon
                            />
                        ) : null}
                    </MetricsCard>
                )}
                renderChart={() => (
                    oee ? (
                        <DonutChart
                            data={[
                                {
                                    angle: 1 - oee.value,
                                    style: {
                                        fill: colors.lighterGreen,
                                        stroke: colors.transparent
                                    }
                                },
                                {
                                    angle: oee.value,
                                    label: oee.label,
                                    id: oee.id,
                                    style: {
                                        fill: colors.blue,
                                        stroke: colors.transparent
                                    }
                                },
                            ]}
                            onChartClick={onChartClick}
                        />
                    ): null
                )}
            />
}

export default EfficiencySection;