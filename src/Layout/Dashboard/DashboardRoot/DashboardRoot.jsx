import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const DashboardRoot = () => {
    return (
        <div className='flex'>
            <div>
                <Sidebar />
            </div>
            <div className='grow px-5'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardRoot;