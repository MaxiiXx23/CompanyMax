import styled from "styled-components"

import { device } from '../../Config/responsiveConfig'

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media ${device.mobileM} and (max-width:425px){
        span{
            font-size: 14px;
        }
    }
    @media ${device.mobileS} and (max-width:374px){
        span{
            font-size: 14px;
        }
    }
`
const Infos = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 50px;
    span{
        margin: 0 0 0 5px;
    }
    @media ${device.mobileM} and (max-width:425px){
        span{
            font-size: 14px;
        }
    }
    @media ${device.mobileS} and (max-width:374px){
        span{
            font-size: 14px;
        }
    }
`

export { Container, Infos }