import React from 'react'
import NavBar from '../NavBar/NavBar'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const HomePage = () => {
  // Accessing Data

  const user = useSelector((state) => state.user)
  const navigate = useNavigate()

  useEffect(() => {
    if (!user.login || !user.user) {
      navigate('/login')
    }
  }, [user.login, user.user, navigate])

  return (
    <div>
      <NavBar />
      Main Content
    </div>
  )
}

export default HomePage
