import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Header_1 from './pages/Header'

import Wellcom_sc from './pages/Wellcom_sc'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

import Footer from './pages/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Header_1 />}/>
      </Routes>
        <Routes>
          <Route path='/' element={<Wellcom_sc />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
