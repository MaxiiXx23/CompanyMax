//import { useParams } from 'react-router-dom'

import { Container, Main, InfosMain, Photo, Datas } from './styled'

function Company(){
    //const {id} = useParams()
    return(
        <Container>
            <img 
                src='http://st-1.akipress.org/127/.storage/ennews/images/World/e38fc8f816406fb69f4948adbc75441d.jpeg'
                alt='Capa' 
            />
            <Main>
                <InfosMain>
                    <Photo>
                        <img 
                            src='https://capitalist.com.br/wp-content/uploads/2021/09/mark-zuckerberg-scaled.jpg'
                            alt='profile'
                        />
                    </Photo>
                    <Datas>
                        <span>Facebook</span>
                        <span>Silicon Valley, Los Angels, EUA.</span>
                    </Datas>
                </InfosMain>
            </Main>

        </Container>
    )
}


export { Company }