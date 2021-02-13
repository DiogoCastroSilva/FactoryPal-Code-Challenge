// Libraries
import { FC } from "react";

// Styles
import { OverallContainer } from "./overall-section.styles";

// Utilities
import { MetricsData } from "../../types";



interface OverallSectionProps {
    data: MetricsData[];
}

/**
 * Section of the page that will display overall data in a table
 */
const OverallSection: FC<OverallSectionProps> = ({ data }) =>(
    <OverallContainer>

    </OverallContainer>
);

export default OverallSection;