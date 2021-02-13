import styled, { css } from 'styled-components';

// Themes
import { colors } from '../../theme';


export const TableContainer = styled.table`
    border-collapse: collapse;
    table-layout: fixed;
    width: 100%;
`;

const tableStyles = css`
    padding: 0.5rem;
    text-align: left;
`;

export const TableHead = styled.thead`
    letter-spacing: 2px;
`;

export const TableHeadTH = styled.th`
    ${tableStyles};
`;

export const TableHeadRow = styled.tr`
    background-color: ${colors.green};
    color: ${colors.black};
    text-align: left;
`;

export const TableData = styled.td`
    ${tableStyles};
    letter-spacing: 1px;
`;

interface TableDataRowProps {
    active?: boolean;
}

export const TableDataRow = styled.tr<TableDataRowProps>`
    border-bottom: thin solid ${colors.lightGrey};
    background-color: ${ ({ active }) => active ? colors.yellow : 'transparent'};

    :last-of-type {
        border-bottom: medium solid ${colors.green};
    }

    :hover {
        background-color: ${colors.lightGreen};
    }
`;