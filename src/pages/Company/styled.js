import styled from 'styled-components'

import { device } from '../../Config/responsiveConfig'

const Container = styled.div`
    display: block;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: black;
    img{
        height: 250px;
        width: 100%;
    }
    @media ${device.mobileM} and (max-width:425px){
        img{
            height: 220px;
        }
    }
    @media ${device.mobileS} and (max-width:374px){
        img{
            height: 180px;
        }
    }
`

const InfosMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 10px;
`
const Photo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }
    @media ${device.mobileM} and (max-width:425px){
        img{
            height: 120px;
            width: 120px;
        }
    }
    @media ${device.mobileS} and (max-width:374px){
        img{
            width: 100px;
            height: 100px;
        }
    }
`
const Datas = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    span{
        margin: 4px 0 4px 0;
    }
    @media ${device.mobileM} and (max-width:425px){
        span{
            font-size: 14px;
        }
    }
    @media ${device.mobileS} and (max-width:374px){
        span{
            font-size: 12px;
        }
    }
`
const More = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin: 0 0 5px;
        background: #48dbfb;
        border: 1px solid #48dbfb;
        border-radius: 2px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        color: #fff;
        cursor: pointer;
    }
    button:hover{
        transition: 0.5s;
        font-size: 16px;
        color: #fff;
        padding: 14px;
        background: #0abde3;
        border: 1px solid #0abde3;
        border-radius: 2px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
    }
    span{
        font-size: 10px;
        margin: 5px 0 5px 0;
    }
    a{
        font-size: 10px;
        margin: 5px 0 5px 0; 
        text-decoration: none;
        cursor: pointer;
    }
    @media ${device.mobileM} and (max-width:425px){
        button{
            padding: 4px;
            font-size: 14px;
        }
        button:hover{
            padding: 8px;
            font-size: 14px;
        }
        span{
            font-size: 8px;
        }
        a{
            font-size: 8px;
        }
    }
    @media ${device.mobileS} and (max-width:374px){
        button{
            padding: 2px;
            font-size: 14px;
        }
        button:hover{
            padding: 6px;
            font-size: 14px;
        }
        span{
            font-size: 8px;
        }
        a{
            font-size: 8px;
        }
    }

`
const Tabs = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    height: 70px;
    button{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px;
        margin: 0 5px 0 5px;
        background: #576574;
        border: 1px solid #576574;
        border-radius: 16px;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        color: #fff;
        cursor: pointer;
    }
    button:hover{
        transition: 0.5s;
        font-size: 16px;
        color: #fff;
        padding: 12px;
        background: #222f3e;
        border: 1px solid #222f3e;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
    }
    @media ${device.mobileM} and (max-width:425px){
        button{
            padding: 8px;
        }
        button:hover{
            padding: 12px;
        }
    }
    @media ${device.mobileS} and (max-width:374px){
        button{
            padding: 6px;
        }
        button:hover{
            padding: 10px;
        }
    }
`

export { Container, InfosMain, Photo, Datas, More, Tabs }