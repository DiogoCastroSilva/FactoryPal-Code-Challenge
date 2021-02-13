// Libraries
import { FC } from 'react';

// Styles
import {
    AlertContainer,
    MessageContainer,
    CloseButton
} from './error-alert.styles';

// Components
import Alert from '../alert';

// Utilities
import useAPIError from '../../hooks/useAPIError';



interface ErrorAlertProps {}

/**
 * Error alert - used to display API errors
 */
const ErrorAlert: FC<ErrorAlertProps> = () => {
    const { error, removeError } = useAPIError();

    const closeErrorAlertHandler = () => removeError();

    return (
        <Alert
            type='error'
            open={!!error}
        >
            <AlertContainer>
                <MessageContainer>
                    <div>{error}</div>
                </MessageContainer>
                <MessageContainer>
                    <CloseButton onClick={closeErrorAlertHandler}>X</CloseButton>
                </MessageContainer>
            </AlertContainer>
        </Alert>
    );
};

export default ErrorAlert;