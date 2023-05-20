//1. import useState
import { useState } from 'react'

import { Routes, Route } from 'react-router-dom'
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import HomePage from './components/HomePage/HomePage'
import Profile from './components/Profile/Profile'
function App() {
  // 2. make the state

  return (
    <div className='container'>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='home' element={<HomePage />} />
        <Route path='profile' element={<Profile />} />

        <Route path='*' element={<p>Page Not Found</p>} />
      </Routes>
    </div>
  )
}

export default App
