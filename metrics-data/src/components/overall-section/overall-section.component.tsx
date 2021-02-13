// Libraries
import { FC } from 'react';

// Components
import MetricsTable from "../metrics-table";

// Utilities
import { MetricsData } from '../../types';
import Section from '../section';



interface OverallSectionProps {
    data: MetricsData[];
    selectedDataPointID?: string;
}

/**
 * Section of the page that will display overall data in a table
 */
const OverallSection: FC<OverallSectionProps> = ({ data, selectedDataPointID }) =>(
    <Section
        title="Overall Data"
    >
        <MetricsTable
            data={data}
            selectedRowID={selectedDataPointID}
        />
    </Section>
);

export default OverallSection;