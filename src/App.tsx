import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {Dashboard} from './pages/Dashboard';
import AuthLayout from './layouts/AuthLayout';
function App() {


  return ( 
   
<Routes>
      <Route element={<AuthLayout />}>
       <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />

          
      <Route path="/" element={<Dashboard />} /> 
      
  
    </Routes>


  )
}

export default App
