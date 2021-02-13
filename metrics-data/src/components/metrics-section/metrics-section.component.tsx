// Libraries
import { FC } from 'react';

// Components
import Section from '../section';
import { MetricsCardContainer, MetricsChartContainer } from './metrics-section-styles';



interface MetricsSectionProps {
    /**
     * Title of the section
     */
    title: string;
    /**
     * Renders the metrics data
     */
    renderMetrics: () => JSX.Element;
    /**
     * Renders the chart data
     */
    renderChart: () => JSX.Element | null;
};

/**
 * Creates a section for Metrics data
 */
const MetricsSection: FC<MetricsSectionProps> = ({ title, renderMetrics, renderChart }) => (
    <Section title={title}>
        <MetricsCardContainer>
            {renderMetrics()}
    </MetricsCardContainer>
    <MetricsChartContainer>
        {renderChart()}
    </MetricsChartContainer>
    </Section>
);

export default MetricsSection;