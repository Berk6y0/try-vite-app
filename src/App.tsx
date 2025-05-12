import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import {Login} from './pages/Login';
import {Register} from './pages/Register';
import {Dashboard} from './pages/Dashboard';
import AuthLayout from './layouts/AuthLayout';
import { useTranslation } from 'react-i18next';

export const LanguageSwitcher=() =>{
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
 const currentLang = i18n.language;
  const changeLanguage = (lng: 'en' | 'tr') => {
    i18n.changeLanguage(lng);
  };

  return (
<div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-white border border-gray-300 rounded shadow-sm hover:bg-gray-100 focus:outline-none"
      >
        {currentLang.toUpperCase()} ▾
      </button>

      {open && (
        <div className="absolute mt-2 w-28 bg-white border border-gray-200 rounded shadow-lg z-10">
          <button
            onClick={() => changeLanguage('tr')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Türkçe
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            English
          </button>
        </div>
      )}
    </div>
  );

}

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
