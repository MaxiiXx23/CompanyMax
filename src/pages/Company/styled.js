import styled from 'styled-components'

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
`
const Datas = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    span{
        margin: 4px 0 4px 0;
    }
`
const More = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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
`

export { Container, InfosMain, Photo, Datas, More, Tabs }