import styled from 'styled-components';

// Utilities
import { getColorByAlertType } from '../../utils/getColor';
import { AlertType } from './alert.component';



interface AlertContainerProps {
    type: AlertType;
}

export const AlertContainer = styled.div<AlertContainerProps>`
    background-color: ${ ({ type }) => getColorByAlertType(type)}};
    position: fixed;
    top: 0;
    left: calc(50vw - 300px);
    width: 600px;
    max-height: 100%;
    padding: .5rem;
`;