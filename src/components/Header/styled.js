import styled from 'styled-components';

import { device } from '../../Config/responsiveConfig'

export const HeaderNav = styled.header`
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

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 15px;

    @media ${device.mobileM} and (max-width:425px){
        display: none;
    }
    @media ${device.mobileS} and (max-width:374px){
        display: none;
    }
`
export const MenuNav = styled.ul`
    width: 15%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    list-style-type: none;

        
    a{
        text-decoration: none;
        color: #fff;
    }
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
export const MenuToggle = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    @media ${device.mobileS} and (max-width: 426px){
        display: flex;
    }
`

export const OptionsToggle = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: #222f3e;
    
    z-index: 10;
    animation: downToggle 1s normal;
    -webkit-animation: downToggle 1s normal;

    @keyframes downToggle{
        from {
            transform: translateY(100px);
            }
        to {
            transform: translateY(0px);
        }
    }
    @-webkit-keyframes downToggle {
        from {
            transform: translateY(100px);
        }
        to {
            transform: translateY(0px);
        }
}

`
export const ListOptions = styled.ul`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    flex-direction: column;
    li{
        margin: 15px 0 15px 0;
    }
    a{
        text-decoration: none;
        color: #fff;
    }

`