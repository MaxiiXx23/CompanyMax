import styled, { createGlobalStyle } from 'styled-components'
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

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
const MainBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 50%;
    background: #576574;
`
const List = styled.nav`
    position: relative;
    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    overflow-y: auto;
    ul{
        width: 100%;
    }
`

export { GlobalStyled, Container, MainBox, List }