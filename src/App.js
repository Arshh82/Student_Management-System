import React from 'react'
import { Route, Routes } from 'react-router'
import Login from './Components/Log-in/Login'
import Dashboard from './Components/Dashboard/Dashboard'
import Signup from './Components/Signup/Signup'
import './App.css'
import Chart from './Components/Dashboard/Chart'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/> }></Route>
      <Route path='/dashboard' element={<Dashboard/> }></Route>
      <Route path='/signup' element={<Signup/> }></Route>
      <Route path='/tt' element={<Chart/> }></Route>
    </Routes>
    </>
  )
}

export default App