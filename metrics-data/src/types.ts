export interface Base {
    id: string;
}

export interface MetricsData extends Base {
    label: string;
    value: number;
    type: ValueType;
    description: string;
    category: Category;
}

export type ValueType = 'percentage' | 'number' | 'secs' | 'minutes' | 'hours';

export type Category = 'efficiency' | 'shift' | 'downtime';

export interface APIData<T> {
    data: Array<T>;
}