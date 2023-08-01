import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './Components/Log-in/Login'
import Dashboard from './Components/Dashboard/Dashboard'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/> }></Route>
      <Route path='/dashboard' element={<Dashboard/> }></Route>
    </Routes>
    </>
  )
}

export default App