import PropTypes from 'prop-types'
import { Container, PhotoProfile, Infos} from './styled'
import { FaUserCircle} from 'react-icons/fa'

function InfoList({info}){
    const data = info
    return(
        <Container>
            <PhotoProfile>
                <FaUserCircle size={90} />
            </PhotoProfile>
            <Infos>
                <span>Company: {data.name}</span>
                <span>Country: {data.country}</span>
                <span>State: {data.state}</span>
                <span>Adress: {data.street}, {data.number}</span>
            </Infos>
        </Container>
    )

}

InfoList.propTypes = {
    info: PropTypes.object
  };

export { InfoList }