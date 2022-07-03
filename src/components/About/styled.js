import styled from "styled-components"

import { device } from '../../Config/responsiveConfig'

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Description = styled.section`
    margin: 5px;
    width: 80%;
    text-align: justify;
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
    @media ${device.mobileM} and (max-width:425px){
        font-size: 14px;
    }
    @media ${device.mobileS} and (max-width:374px){
        font-size: 14px;
    }
`

export { Container, Description }