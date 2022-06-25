import { Link } from "react-router-dom";
import { FaHome, FaRocket, FaSignOutAlt, FaWpforms } from 'react-icons/fa'

import { Nav, Logo, MenuNav } from './styled'

function Header() {
    return (
        <Nav>
            <Logo>
                <FaRocket size={24} />
            </Logo>
            <MenuNav>
                <Link to='/'>
                    <FaHome size={24} />
                </Link>
                <Link to='/form'>
                    <FaWpforms size={24} />
                </Link>
            </MenuNav>
            <MenuNav>
                <Link to='/'>
                    <FaSignOutAlt size={24} />
                </Link>
            </MenuNav>
        </Nav>
    )
}

export { Header }