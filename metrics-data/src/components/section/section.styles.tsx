import styled from 'styled-components';

export const SectionContainer = styled.section`
    width: 100%;
`;

export const SectionContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 700px) {
            flex-direction: column;
    }
`;