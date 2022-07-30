import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --purple-light: #8284FA;
        --purple-dark: #5E60CE;
        --blue-light: #4EA8DE;
        --blue-dark: #1E6F9F;
        --gray-700: #0D0D0D;
        --gray-600: #1A1A1A;
        --gray-500: #262626;
        --gray-400: #333333;
        --gray-300: #808080;
        --gray-200: #D9D9D9;
        --gray-100: #F2F2F2;
        --danger: #E25858;
    }

    * {
        margin: 0;
        top: 0;
        box-sizing: border-box;
    }

    body {
        background: var(--gray-600);
        color: var(--gray-300);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Inter', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        line-height: 140%;
    }
`;