import { Outlet } from 'react-router-dom';
import { LanguageSwitcher } from '../App';

export default function AuthLayout() {
  return (

       <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>
      <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg">
        <Outlet />
      </div>
    </div>
 
  );
}
