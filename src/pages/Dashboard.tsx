// src/pages/Dashboard.tsx

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../App';
export const Dashboard = () => {
const { t } = useTranslation();
  return (

    
    <>
      
      <div className="flex flex-col items-center justify-center h-screen bg-gray">
        <h1 className="text-4xl font-bold mb-4">{t('dashboard')}</h1>
        <p className="text-lg mb-8">{t('welcome')}</p>
        <Link to="/login" className="text-blue-500 hover:underline">{t('go_to_login')}</Link>
      </div><div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div></>
   
  );
};
