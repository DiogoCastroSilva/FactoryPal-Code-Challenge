// Libraries
import { useEffect, useState } from 'react';

// Utilities
import API from '../API';
import { MetricsData } from '../types';
import useAPIError from './useAPIError';


/**
 * Hook to fetch the Metrics Data
 *
 * @returns metricsData: MetricsData[]
 * @returns isLoading: boolean
 * @returns hasError: boolean
 */
const useGetMetricsData = () => {
    const [metricsData, setMetricsData] = useState<MetricsData[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { addError } = useAPIError();

    useEffect(() => {
        const fetchMetricsData = async () => {
            setIsLoading(true);
            try {
                const result = await API.getMetricsData();
                setMetricsData(result.data);
            } catch (error) {
                // The error would come from the API
                addError('Error while fetching metrics data');
            } finally {
                setIsLoading(false);
            }
        };

        fetchMetricsData();
    }, []);

    return {
        isLoading,
        metricsData
    }
};

export default useGetMetricsData;