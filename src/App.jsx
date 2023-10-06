import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Index'
import DefaultNavbar from './Components/Constant/Navbar'
import Register from './Components/User/Auth/Register'
import Login from './Components/User/Auth/Login'

function App() {
  return (
    <div className='bg-white min-h-screen'>
    <DefaultNavbar/>
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/new/account' element={<Register/> } />
      <Route path='/login' element={<Login/> } />

      </Routes>
    </div>
  )
}

export default App
