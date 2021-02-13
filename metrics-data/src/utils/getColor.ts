import { AlertType } from '../components/alert/alert.component';
import { colors } from '../theme';
import { Category } from '../types';


/**
 * Return the color for the Alert Types
 * @param type: AlertType
 */
export function getColorByAlertType(type: AlertType) {
    let color: string;
    switch(type) {
        case "error":
            color = colors.orange;
            break;
        case 'warning':
            color = colors.yellow;
            break;
        default:
            color = colors.blue;
            break;
    };

    return color;
};

/**
 * Will return the color for the category
 * This color could come from the server
 *
 * @param category Category
 */
export function getColorByCategory(category?: Category) {
    let color: string;

    switch(category) {
        case "efficiency":
            color = colors.blue
            break;
        case 'downtime':
            color = colors.orange;
            break;
        case 'shift':
            color = colors.yellow;
            break;
        default:
            color = colors.lightGrey;
            break;
    };

    return color;
}