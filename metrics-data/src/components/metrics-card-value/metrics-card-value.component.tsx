// Libraries
import { FC } from 'react';

// Styles
import {
    MetricsCardValueContainer,
    MetricValueContainer,
    ArrowContainer
 } from './metrics-card-value.styles';

 // Utilities
import { getArrow } from '../../utils/getArrow';



interface MetricsCardValueProps {
    title?: string;
    value: number;
    goal?: number;
    type?: string;
    showIcon?: boolean;
}

/**
 * Metrics Card, will show the metrics value according to the inputs
 */
const MetricsCardValue: FC<MetricsCardValueProps> = ({
    title,
    value,
    goal,
    type,
    showIcon = false
}) => (
    <MetricsCardValueContainer>
        <MetricValueContainer>
            <h4>{title}</h4>
        </MetricValueContainer>
        <MetricValueContainer>
            {showIcon && goal ? (
                <ArrowContainer>
                    {getArrow(value, goal)}
                </ArrowContainer>
             ) : null}
                <div>{value} {type ? type : null}</div>
        </MetricValueContainer>
        <MetricValueContainer>
            {goal ? (
            <p>Goal: {goal} {type ? (type) : null}</p>
        ) : null}
        </MetricValueContainer>
    </MetricsCardValueContainer>
);

export default MetricsCardValue;