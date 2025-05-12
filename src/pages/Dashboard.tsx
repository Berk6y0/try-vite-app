// src/pages/Dashboard.tsx

import { Link } from 'react-router-dom';

export const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray">
      <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-8">Welcome to your dashboard!</p>
      <Link to="/login" className="text-blue-500 hover:underline">Go to Login</Link>
    </div>
  );
};
