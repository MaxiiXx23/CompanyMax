import { FaPaperPlane } from 'react-icons/fa'
import { Container, Content, Vacancy, Description, ButtonSend, List } from './styled'

function Jobs() {
    return (
        <Container>
            <List>
                <Content>
                    <Vacancy>Programmer Junior</Vacancy>
                    <Description>
                        Junior programmer for creating websites in React, Node and Prisma.
                    </Description>
                    <ButtonSend>
                        <FaPaperPlane size={24} />
                        <span>Send résumé</span>
                    </ButtonSend>
                </Content>
            </List>
        </Container>
    )
}



export { Jobs }