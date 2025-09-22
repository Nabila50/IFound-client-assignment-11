import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Slider from '../../Components/slider';

const RootLayout = () => {
  return (
    <div className='bg-base-300'>
        <Navbar></Navbar>
     
        <div className='w-11/12 mx-auto'>
    
          <Outlet></Outlet>

        </div>
        

        <Footer></Footer>

    </div>
  );
};

export default RootLayout;