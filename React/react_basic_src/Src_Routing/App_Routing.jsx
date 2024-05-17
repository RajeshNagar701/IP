import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Component/Header'
import Footer from './Component/Footer'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App_Routing() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<><Header/><Home/><Footer/></>}></Route>
            <Route path='/about' element={<><Header/><About/><Footer/></>}></Route>
            <Route path='/contact' element={<><Header/><Contact/><Footer/></>}></Route>
            <Route path='*' element={<><h1>Page Not Found</h1></>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App_Routing