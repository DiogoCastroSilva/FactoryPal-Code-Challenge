// Libraries
import { FC, ReactNode } from 'react';

// Styles
import { AlertContainer } from './alert.styles';


/**
 * Types of the Alert
 */
export type AlertType = 'warning' | 'error';

interface AlertProps {
    children: ReactNode;
    /**
     * The alert Type
     */
    type: AlertType;
    /**
     * If alert is open
     */
    open: boolean;
}

/**
 * This component will display an alert on the top of the page
 * @param children
 *  @param type
 * @param open
 */
const Alert: FC<AlertProps> = ({ children, type, open}) => {
    return open ? (
        <AlertContainer
            role='alert'
            type={type}
        >
            {children}
        </AlertContainer>
    ) : null;
};

export default Alert;