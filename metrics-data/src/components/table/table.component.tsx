// Styles
import {
    TableContainer,
    TableData,
    TableDataRow,
    TableHead,
    TableHeadRow,
    TableHeadTH
} from './table.styles';

// Utilities
import { Base } from '../../types';


interface Column<T> extends Base {
    /**
     * Display name of the column
     */
    title: string;
    /**
     * This method will render the table data row
     * @param item T
     */
    render(item: T): JSX.Element;
}

interface TableProps<T extends Base> {
    /**
     * Columns to display on the Table Head
     */
    columns: Column<T>[];
    /**
     * Data to display on the table body
     */
    data: T[];
    /**
     * ID of the selected row
     */
    selectedRowID?: string;
}

/**
 *  This component will display a Table
 */
const Table = <T extends Base>({  columns, data, selectedRowID}: TableProps<T>) => (
    <TableContainer>
        <TableHead>
            <TableHeadRow>
                {columns.map(col => (
                    <TableHeadTH key={col.id}>
                        {col.title}
                    </TableHeadTH>
                ))}
            </TableHeadRow>
        </TableHead>
        <tbody>
            {data.map(row => (
                <TableDataRow
                    key={row.id}
                    active={row.id === selectedRowID}
                >
                    {columns.map(col => (
                        <TableData key={col.id}>
                            {col.render(row)}
                        </TableData>
                    ))}
                </TableDataRow>
            ))}
        </tbody>
    </TableContainer>
);

export default Table;