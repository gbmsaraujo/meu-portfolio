import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home/Home'

<BrowserRouter>
    <Routes>
        <Route 
            exact
            path='/'
            element ={<Home />}
        />
    </Routes>
</BrowserRouter>