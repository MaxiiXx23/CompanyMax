import { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import { About } from '../../components/About'
import { Newsletter } from '../../components/Newsletter'
import { Jobs } from '../../components/Jobs'
import { Container, InfosMain, Photo, Datas, More, Tabs } from './styled'

function Company() {

    const [showAbout, setShowAbout] = useState(true)
    const [showNews, setShowNews] = useState(false)
    const [showJobs, setShowJobs] = useState(false)

    function handleAbout(){
        if(showAbout) return
        setShowNews(false)
        setShowJobs(false)
        setShowAbout(true)

    }

    function handleNews(){
        if(showNews) return
        setShowAbout(false)
        setShowJobs(false)
        setShowNews(true)
    }
    function handleJobs(){
        if(showJobs) return
        setShowAbout(false)
        setShowNews(false)
        setShowJobs(true)
    }


    return (
        <Container>
            <img
                src='http://st-1.akipress.org/127/.storage/ennews/images/World/e38fc8f816406fb69f4948adbc75441d.jpeg'
                alt='Capa'
            />
            <InfosMain>
                    <Photo>
                        <img
                            src='https://capitalist.com.br/wp-content/uploads/2021/09/mark-zuckerberg-scaled.jpg'
                            alt='profile'
                        />
                    </Photo>
                    <Datas>
                        <span>Meta</span>
                        <span>Technology and innovation company.</span>
                        <span>Silicon Valley, Los Angels, EUA.</span>
                    </Datas>
                    <More>
                        <button><FaUserPlus /> Follow</button>
                        <span>2.7 million other connections work here</span>
                        <Link to="/">See all employees on CampanyMax</Link>
                    </More>
                </InfosMain>
                <Tabs>
                    <button onClick={handleAbout}>About</button>
                    <button onClick={handleNews}>Newsletter</button>
                    <button onClick={handleJobs}>Jobs</button>
                </Tabs>
                {
                  showAbout ? <About/>  : null
                }
                {
                    showNews ? <Newsletter /> : null
                }
                {
                    showJobs ? <Jobs /> : null
                }

        </Container>
    )
}


export { Company }