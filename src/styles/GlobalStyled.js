import styled, { createGlobalStyle } from 'styled-components'
import {Link} from 'react-router-dom'
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
    border: 1px solid #fff;
    border-radius: 2px;
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
const LinkCustom = styled(Link)`
    text-decoration: none;
    color: #fff;

`

export { GlobalStyled, Container, MainBox, List, LinkCustom }