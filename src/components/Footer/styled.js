import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
`

export { Container, Infos }