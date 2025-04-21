import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gray-100 min-h-[calc(100vh-116px)]">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-7 lg:px-10 xl:px-14">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
