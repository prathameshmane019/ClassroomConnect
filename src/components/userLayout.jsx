import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar';
import Navbar from './navbar';

const AuthenticatedLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex ">
        <Sidebar />
        <div className="flex-1 p-6 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthenticatedLayout;
