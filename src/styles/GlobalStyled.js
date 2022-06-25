import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
    }
    body{
        font-family: sans-serif;
        background: #222f3e;
        color: #fff;
    }
`

export { GlobalStyled }