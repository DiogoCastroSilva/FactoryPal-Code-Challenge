// Styles
import { ShellContainer } from './shell.styles';

// Utilities
import useGetMetricsData from '../../hooks/useGetMetricsData';
import OverallSection from '../overall-section';
import { useEffect, useState } from 'react';
import EfficiencySection from '../efficiency-section';
import { Category, MetricsData } from '../../types';


type CategoriesMap = { [key: string]: MetricsData[] };

/**
 * This is the Shell of this application, will contain all the logic to display the data
 */
const Shell = () => {
    const { metricsData, isLoading } = useGetMetricsData();

    const [selectedDataPointID, setSelectedDataPointID] = useState<string>();
    const [categoriesMap, setCategoriesMap] = useState<CategoriesMap>();


    useEffect(() => {
        if (metricsData && metricsData.length > 0) {
           const catMap = metricsData.reduce<CategoriesMap>((acc: CategoriesMap, {category, ...rest}) => {
               if (!acc[category]) {
                   acc[category] = [];
               }

               acc[category].push({category, ...rest});
               return acc;
           }, {});

           setCategoriesMap(catMap);
        }

    }, [metricsData]);

    const setSelectedDataPointHandler = (id: string) => {
        setSelectedDataPointID(id);
    };

    return (
        <ShellContainer>
            <h1>Metrics Data</h1>
            {categoriesMap ? (
                 categoriesMap.hasOwnProperty('efficiency') ? (
                     <EfficiencySection
                        data={categoriesMap['efficiency']}
                        onChartClick={setSelectedDataPointHandler}
                     />
                 ) : null
            ) : null}

            <OverallSection
                data={metricsData}
                selectedDataPointID={selectedDataPointID}
            />
        </ShellContainer>
    );
};

export default Shell;