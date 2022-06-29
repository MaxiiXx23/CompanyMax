
import { Search } from '../../components/search'
import { InfoList } from '../../components/InfoList'
import { Container, MainBox, List, LinkCustom } from '../../styles/GlobalStyled'

function Home() {

    const companies = [
        {
            name: 'Meta',
            country: 'EUA',
            state: 'Los Angels',
            street: 'Stones golds',
            number: '24'
        },
        {
            name: 'Mc Donalds',
            country: 'Brazil',
            state: 'São Paulo',
            street: 'Av. Paulista',
            number: '57'
        },
        {
            name: 'Rockstar Games',
            country: 'EUA',
            state: 'Los Angels',
            street: 'Stones golds',
            number: '79'
        },
        {
            name: 'Uber',
            country: 'EUA',
            state: 'Los Angels',
            street: 'Stones golds',
            number: '205'
        },
        {
            name: 'Burguer King',
            country: 'Brazil',
            state: 'São Paulo',
            street: 'Av. Paulista',
            number: '24'
        },
        {
            name: 'Burguer King',
            country: 'Brazil',
            state: 'São Paulo',
            street: 'Av. Paulista',
            number: '24'
        },
        {
            name: 'Burguer King',
            country: 'Brazil',
            state: 'São Paulo',
            street: 'Av. Paulista',
            number: '24'
        },

    ]

    

    return (
        <Container>
            <MainBox>
                <Search />
                <List>
                    {
                        companies.map((company, index) => (
                            <LinkCustom to={`/company/${index}`}>
                                <InfoList key={index} info={company} />
                            </LinkCustom>
                        ))
                    }
                </List>
            </MainBox>
        </Container>
    )
}

export { Home }