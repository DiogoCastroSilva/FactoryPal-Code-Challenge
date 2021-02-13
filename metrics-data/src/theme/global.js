import { createGlobalStyle  } from 'styled-components';
import { colors } from './colors';
import { fonts, weights, sizes } from './typography';

/**
 * Creates the global files for this app
 */
export const GlobalStyles = createGlobalStyle`
    html,
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-size: ${sizes.normal}
        letter-spacing: 0.5px;
        font-family: ${fonts.PRIMARY};
    }

    h1 {
        font-family: ${fonts.PRIMARY};
        font-weight: ${weights.bold};
        size: ${sizes.big};
        color: ${colors.green}
    }

    h2 {
        font-family: ${fonts.PRIMARY};
        font-weight: ${weights.light};
        size: ${sizes.medium};
        color: ${colors.green}
    }

    h4 {
        font-family: ${fonts.PRIMARY};
        font-weight: ${weights.light};
        size: ${sizes.medium};
        color: ${colors.lightGrey}
    }
`;