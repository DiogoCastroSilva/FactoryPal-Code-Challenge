// Styles
import { ShellContainer } from './shell.styles';

// Utilities
import useGetMetricsData from '../../hooks/useGetMetricsData';
import OverallSection from '../overall-section';
import { useState } from 'react';


/**
 * This is the Shell of this application, will contain all the logic to display the data
 */
const Shell = () => {
    const { metricsData, isLoading } = useGetMetricsData();

    const [selectedDataPointID, setSelectedDataPointID] = useState<string>();

    return (
        <ShellContainer>
            <h1>Metrics Data</h1>

            <OverallSection
                data={metricsData}
                selectedDataPointID={selectedDataPointID}
            />
        </ShellContainer>
    );
};

export default Shell;