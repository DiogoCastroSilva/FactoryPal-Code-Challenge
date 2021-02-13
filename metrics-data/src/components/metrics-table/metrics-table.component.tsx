// Libraries
import { FC } from 'react';

// Components
import Table from '../table';

// Utilities
import { MetricsData } from '../../types';



interface MetricsTableProps {
    data: MetricsData[];
    selectedRowID?: string;
}

/**
 * Creates a table for the metrics data
 */
const MetricsTable: FC<MetricsTableProps> = ({ data, selectedRowID }) => (
    <Table
        columns={[
            {id: 'id', title: 'ID', render: (item) => <span>{item.id}</span>},
            { id: 'label', title: 'Label', render: (item) => <span>{item.label}</span>},
            { id: 'description', title: 'Description', render: (item) => <span>{item.description}</span>},
            { id: 'value', title: 'Value', render: (item) => <p>{item.value}</p>},
            { id: 'unit', title: 'Unit', render: (item) => <p>{item.type}</p>},
            { id: 'category', title: 'Category', render: (item) => <span>{item.category}</span>}
        ]}
        data={data}
        selectedRowID={selectedRowID}
    />
);

export default MetricsTable;