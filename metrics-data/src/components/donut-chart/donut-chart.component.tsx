// Libraries
import { FC, useEffect, useState } from 'react';
import { RadialChart, DiscreteColorLegend } from 'react-vis';

// Styles
import { DonutChartContainer } from './donut-chart.styles';

// Utilities
import { ChartData } from '../../types';



interface Legends {
    title: string;
    color?: string;
}

interface DonutChartProps {
    data: ChartData[];
    onChartClick: (id: string) => void;
}

/**
 * Donut chart component
 */
const DonutChart: FC<DonutChartProps> = ({ data, onChartClick }) => {
   const [legends, setLegends] = useState<Legends[]>();

   /**
    * Creates the legends for the chart
    */
    useEffect(() => {
        if (data) {
            const newLegends = new Array<Legends>();
                data.forEach(d => {
                    if (d.label) {
                        newLegends.push({
                            title: d.label,
                            color: d.style?.fill
                        });
                    }
                });
                setLegends(newLegends);
            }
    }, [data]);

    return (
        <DonutChartContainer>
            <RadialChart
                        height={200}
                        width={200}
                        showLabels={false}
                        onValueClick={(e) => {
                            if (e && e.id) {
                                onChartClick(e.id)
                            }
                        }}
                        data={data}
                />
                {legends ? (
                    <DiscreteColorLegend
                        orientation='horizontal'
                        items={legends}
                        height={60}
                    />
                 ) : null}
        </DonutChartContainer>

    );
}

export default DonutChart;