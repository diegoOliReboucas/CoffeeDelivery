import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
    }

    body{
        font-family: 'Roboto', sans-serif;
        background: ${props => props.theme['background']};
            padding: 0 25rem ;
    }
`