import { ValueType } from '../types';

/**
 * Converts a time value to seconds
 * @param value time value
 * @param type type of the current value
 */
export const getSecondsFromType = (value: number, type: ValueType) => {
    let seconds = value;
    switch (type) {
        case 'minutes':
            seconds = value * 60;
            break;
        case 'hours':
            seconds = value * 60 * 60;
            break;
    };

    return seconds;
};