import styled from "styled-components"

import { device } from '../../Config/responsiveConfig'

const Container = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    border-radius: 2px;

    &:hover{
        transition: 0.7s;
        background: #8395a7;
    }

`
const List = styled.nav`
    display: block;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #222f3e;
    color: #fff;
    border: 1px solid #222f3e;
    border-radius: 2px;
    width: 80%;
    height: 350px;
    overflow-y: auto;
    animation: balance 1s normal;
    -webkit-animation: balance 1s normal;
    @keyframes balance{
        from {
            transform: translateX(100px);
            }
        to {
            transform: translateX(0px);
        }
    }
    @-webkit-keyframes balance {
        from {
            transform: translateX(100px);
        }
        to {
            transform: translateX(0px);
        }
    }
    ul{
        width: 100%;
    }
`

const Vacancy = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 2px;
    @media ${device.mobileM} and (max-width:425px){
        font-size: 12px;
    }
    @media ${device.mobileS} and (max-width:374px){
        font-size: 10px;
    }
`
const Description = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 2px;
    @media ${device.mobileM} and (max-width:425px){
        font-size: 12px;
    }
    @media ${device.mobileS} and (max-width:374px){
        font-size: 10px;
    }
`
const ButtonSend = styled.button`
    display: flex;
    padding: 10px;
    width: 13%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #1dd1a1;
    border-radius: 2px;
    margin: 2px;
    background: #1dd1a1;
    cursor: pointer;
    @media ${device.mobileM} and (max-width:425px){
        span{
            display: none;
        }
    }
    @media ${device.mobileS} and (max-width:374px){
        width: 15%;
        span{
            display: none;
        }
    }
`

export { Container, Content, Vacancy, Description, ButtonSend, List }