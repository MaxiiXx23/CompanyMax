import styled from "styled-components"

const Container = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

`

const Description = styled.section`
    margin: 20px;
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
`

export { Container, Description }