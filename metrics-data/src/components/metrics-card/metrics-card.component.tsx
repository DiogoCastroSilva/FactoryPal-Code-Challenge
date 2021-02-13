// Libraries
import { FC, ReactNode } from "react";

// Styles
import { MetricsCardContainer } from "./metrics-card.styles";


interface MetricsCarProps {
    children: ReactNode;
}

const MetricsCard: FC<MetricsCarProps> = ({ children }) => (
    <MetricsCardContainer>
        {children}
    </MetricsCardContainer>
);

export default MetricsCard;