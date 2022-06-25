import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Form } from '../pages/Form'

function RoutesApp() {
    return (
        <Routes>
            <Route index path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
            <Route path='*' element={<h1>ERROR 404!</h1>} />
        </Routes>
    )
}

export { RoutesApp }