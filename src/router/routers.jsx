import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/login'
import Register from '../pages/register'

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

export default Routers
