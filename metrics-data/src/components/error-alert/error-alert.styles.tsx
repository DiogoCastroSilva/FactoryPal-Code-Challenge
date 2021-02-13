import styled from 'styled-components';


export const AlertContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: .3rem;
`;

export const CloseButton = styled.button`
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;