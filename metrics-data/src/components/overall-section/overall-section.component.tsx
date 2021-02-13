// Libraries
import { FC } from 'react';

// Styles
import { OverallContainer, Title } from './overall-section.styles';

// Components
import MetricsTable from "../metrics-table";

// Utilities
import { MetricsData } from '../../types';



interface OverallSectionProps {
    data: MetricsData[];
    selectedDataPointID?: string;
}

/**
 * Section of the page that will display overall data in a table
 */
const OverallSection: FC<OverallSectionProps> = ({ data, selectedDataPointID }) =>(
    <OverallContainer>
        <Title>Overall Data</Title>
        <MetricsTable
            data={data}
            selectedRowID={selectedDataPointID}
        />
    </OverallContainer>
);

export default OverallSection;