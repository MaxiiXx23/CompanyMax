import { useState } from 'react'
import { Link } from "react-router-dom";
import { FaHome, FaRocket, FaSignOutAlt, FaWpforms, FaBars } from 'react-icons/fa'

import {
    HeaderNav,
    Nav,
    Logo,
    MenuNav,
    MenuToggle,
    OptionsToggle,
    ListOptions
}
    from './styled'

function Header() {

    const [show, setShow] = useState(true);

    function handleMenuToggle(e) {
        document.body.style.overflow = show ? "hidden" : "initial"
        setShow(!show)
    }

    return (
        <>
            <HeaderNav>
                <Logo>
                    <FaRocket size={24} />
                </Logo>
                <MenuToggle onClick={handleMenuToggle}>
                    <FaBars size={24} />
                </MenuToggle>
                <Nav>
                    <MenuNav>
                        <li>
                            <Link to='/'>
                                <FaHome size={24} />
                            </Link>
                        </li>
                        <li>
                            <Link to='/form'>
                                <FaWpforms size={24} />
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <FaSignOutAlt size={24} />
                            </Link>
                        </li>
                    </MenuNav>
                </Nav>
            </HeaderNav>
            {
                show ? null :
                    <OptionsToggle>
                        <ListOptions>
                            <li onClick={handleMenuToggle}>
                                <Link to='/'>
                                    <FaHome size={24} />
                                </Link>
                            </li>
                            <li onClick={handleMenuToggle}>
                                <Link to='/form'>
                                    <FaWpforms size={24} />
                                </Link>
                            </li>
                            <li onClick={handleMenuToggle}>
                                <Link to='/'>
                                    <FaSignOutAlt size={24} />
                                </Link>
                            </li>
                        </ListOptions>
                    </OptionsToggle>
            }
        </>
    )
}

export { Header }