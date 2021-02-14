import { APIData, MetricsData } from './types';

import { data } from './fakeData';



const API = {
     /**
     * Is using fake data. The logic to fetch from an API would be here
     */
    getMetricsData: (): Promise<APIData<MetricsData>> => {
        return Promise.resolve(data);
    }
};

export default API;