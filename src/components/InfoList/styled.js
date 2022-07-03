import styled from "styled-components"
import { device } from '../../Config/responsiveConfig'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    margin: 10px 0 10px 0;
    cursor: pointer;
    &:hover{
        transition: 0.7s;
        background: #8395a7;
    }
`
const PhotoProfile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    img{
        width: 90px;
        height: 90px;

    }
    @media ${device.mobileL} and (max-width:630px){
        width: 60px;
        height: 60px;
    }
    @media ${device.mobileM} and (max-width:424px){
        width: 50px;
        height: 50px;
    }
    @media ${device.mobileS} and (max-width:374px){
        width: 40px;
        height: 40px;
    }
`
const Infos = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    align-items: center;
    justify-content: center;
    text-align: center;
    span{
        margin: 0 0 2px 0 ;
    }
    @media ${device.mobileL} and (max-width:630px){
        span{
            font-size: 14px;
        }
    }
    @media ${device.mobileM} and (max-width:424px){
        span{
            font-size: 12px;
        }
    }
    @media ${device.mobileS} and (max-width:374px){
        span{
            font-size: 10px;
        }
    }
` 


export { Container, PhotoProfile, Infos }