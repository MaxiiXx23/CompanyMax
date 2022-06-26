import styled from "styled-components"

const SearchHeader = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    label{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        input{
            padding: 10px;
            border: 1px solid #48dbfb;
            border-radius: 4px;
            margin-left: 8px;
        }
        input:focus{
            border: 1px solid #2e86de;
        }
        input:hover{
            transition: 0.4s;
            border: 1px solid #2e86de;
        }
    }

`
const ButtonAdd = styled.button`
    display: flex;
    justify-items: center;
    align-items: center;
    padding: 8px;
    background: #1dd1a1;
    color: #fff;
    border: 1px solid #1dd1a1;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        border: 1px solid #10ac84;
        background: #10ac84;
    }
` 

export { SearchHeader, ButtonAdd }