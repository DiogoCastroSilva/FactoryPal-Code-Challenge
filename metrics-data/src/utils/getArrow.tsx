// Icons
import {  ReactComponent as ArrowDown } from '../icons/arrow-down-outline.svg';
import {  ReactComponent as ArrowUp } from '../icons/arrow-up-outline.svg';
import { colors } from '../theme';

export const getArrow = (value: number, goal: number) => {
    if (value > goal) {
        return <ArrowUp fill={colors.green} />;
    } else {
        return <ArrowDown fill={'red'} />;
    }
};