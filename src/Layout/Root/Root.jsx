import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            this is footer
        </div>
    );
};

export default Root;