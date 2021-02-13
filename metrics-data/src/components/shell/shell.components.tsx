// Styles
import {
    ShellContainer,
    Title
} from './shell.styles';

// Utilities
import useGetMetricsData from '../../hooks/useGetMetricsData';


/**
 * This is the Shell of this application, will contain all the logic to display the data
 */
const Shell = () => {
    const { metricsData, isLoading } = useGetMetricsData();

    return (
        <ShellContainer>
            <Title>Metrics Data</Title>
        </ShellContainer>
    );
};

export default Shell;