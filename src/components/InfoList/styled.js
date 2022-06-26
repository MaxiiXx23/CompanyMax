import styled from "styled-components"

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
`
const Infos = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    align-items: center;
    justify-content: center;
    span{
        margin: 0 0 2px 0 ;
    }
` 


export { Container, PhotoProfile, Infos }