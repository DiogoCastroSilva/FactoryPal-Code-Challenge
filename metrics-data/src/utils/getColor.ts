import { AlertType } from '../components/alert/alert.component';
import { colors } from '../theme';


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
}