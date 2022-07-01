import { FaRocket } from 'react-icons/fa'

import { Container, Infos } from './styled'

function Footer(){
    return(
        <Container>
            <Infos>
                <FaRocket size={24} />
                <span>Reach infinity.</span>
            </Infos>
            <span>All rights reserved. 2022 &copy;</span>
        </Container>
    )
}


export { Footer }