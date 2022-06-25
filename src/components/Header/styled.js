import styled from 'styled-components';

export const Nav = styled.nav`
    background: #222f3e;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px;
    a{
        text-decoration: none;
        color: #fff;
        margin-left: 20px;
    }
`
export const MenuNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Logo = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
`