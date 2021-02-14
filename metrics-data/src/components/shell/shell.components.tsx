// Libraries
import { useEffect, useState } from 'react';

// Styles
import { ShellContainer } from './shell.styles';

// Components
import EfficiencySection from '../efficiency-section';
import ShiftSection from '../shift-section';
import OverallSection from '../overall-section';
import DowntimeSection from '../downtime-section';

// Utilities
import useGetMetricsData from '../../hooks/useGetMetricsData';
import { MetricsData } from '../../types';



export type CategoriesMap = { [key: string]: MetricsData[] };

/**
 * This is the Shell of this application, will contain all the logic to display the data
 */
const Shell = () => {
    const { metricsData } = useGetMetricsData();

    const [selectedDataPointID, setSelectedDataPointID] = useState<string>();
    const [categoriesMap, setCategoriesMap] = useState<CategoriesMap>();

    /**
     * Will create an Object set of category -> object:
    *  Example:
    *       {
    *           efficiency: {
    *               id: 'oee',
    *               value: 65,
    *               ...
    *           },
    *           {
    *               downtime: {
    *                   id: 'unexpected',
    *                   value: -230,
    *                   ...
    *               }
    *           }
    *       }
     */
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

    /**
     * Selects the row in the table with the input id
     * @param id point ID
     */
    const setSelectedDataPointHandler = (id: string) => {
        setSelectedDataPointID(id);
    };

    return (
        <ShellContainer>
            <h1>Metrics Data</h1>
            {categoriesMap ? (
                Object.keys(categoriesMap).map(key => {
                    if (key) {
                        if (key === 'efficiency') {
                               return <EfficiencySection
                                    key='efficiency'
                                    data={categoriesMap['efficiency']}
                                    onChartClick={setSelectedDataPointHandler}
                                />
                        }

                        if (key === 'shift') {
                                return <ShiftSection
                                    key='shift'
                                    data={categoriesMap['shift']}
                                    onChartClick={setSelectedDataPointHandler}
                                />
                        }

                        if (key === 'downtime') {
                            return <DowntimeSection
                                            key='downtime'
                                            data={categoriesMap['downtime']}
                                            onChartClick={setSelectedDataPointHandler}
                                        />
                        }
                    }
                })

            ) : null}

            <OverallSection
                data={metricsData}
                selectedDataPointID={selectedDataPointID}
            />
        </ShellContainer>
    );
};

export default Shell;