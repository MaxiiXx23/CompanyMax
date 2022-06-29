import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex: 1;
    position: relative;
    align-items: center;
    justify-content: center;
    background: #fff;
    color: black;
    img{
        height: 250px;
        width: 100%;
    }
`
const Main = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 100%;
    margin-top: 350px;
    background: #fff;
    border-radius: 2px;
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
    width: 25%;
    img{
        width: 180px;
        height: 180px;
        border-radius: 50%;
    }
`
const Datas = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
    width: 70%;
`

export { Container, Main, InfosMain, Photo, Datas }