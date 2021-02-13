// Styles
import {
    ShellContainer,
    Title
} from './shell.styles';

// Utilities
import useGetMetricsData from '../../hooks/useGetMetricsData';
import OverallSection from '../overall-section';


/**
 * This is the Shell of this application, will contain all the logic to display the data
 */
const Shell = () => {
    const { metricsData, isLoading } = useGetMetricsData();

    return (
        <ShellContainer>
            <Title>Metrics Data</Title>

            <OverallSection data={metricsData} />
        </ShellContainer>
    );
};

export default Shell;