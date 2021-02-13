// Libraries
import { FC, useEffect, useState } from 'react';
import { RadialChart } from 'react-vis';

import {
    MetricsCardContainer,
    MetricsChartContainer
} from './efficiency-section.styles';

// Components
import MetricsCardValue from "../metrics-card-value";
import Section from '../section';

// Utilities
import { MetricsData } from "../../types";
import MetricsCard from "../metrics-card";
import { getColorByCategory } from '../../utils/getColor';
import MetricsSection from '../metrics-section';



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
                                type={'Units'}
                                value={sl.value}
                            />
                        ) : null}
                        {lbp ? (
                            <MetricsCardValue
                                aria-label={lbp.description}
                                title={lbp.label}
                                type={'Units'}
                                value={lbp.value}
                            />
                        ) : null}
                    </MetricsCard>
                )}
                renderChart={() => (
                    oee ? (
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
                           data={[
                               {
                                   angle: oee.value,
                                   label: oee.label,
                                   id: oee.id,
                                   style: {
                                       fill: getColorByCategory('efficiency'),
                                       stroke: 'transparent'
                                   }
                               },
                               {
                                   angle: 1 - oee.value,
                                   style: {
                                       fill: getColorByCategory(),
                                       stroke: 'transparent'
                                   }
                               }
                           ]}
                       />
                    ): null
                )}
            />
}

export default EfficiencySection;