import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Form } from '../pages/Form'
import { Company } from '../pages/Company'

function RoutesApp() {
    return (
        <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
            <Route path='/company/:id' element={<Company />} />
            <Route path='*' element={<h1>ERROR 404!</h1>} />
        </Routes>
    )
}

export { RoutesApp }