import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from '../Components/Register'
import Pass from '../Components/Pass'
import Login from '../Components/Login'

const AppRouter = () => {

  return (
    

    <BrowserRouter>
    
        <Routes>

        <Route path='/' element={<Login />}></Route>
        <Route path='regis' element={<Register />}></Route>
        <Route path='pass' element={<Pass />}></Route>

            
        </Routes>
        
    </BrowserRouter>
   
  )
}

export default AppRouter