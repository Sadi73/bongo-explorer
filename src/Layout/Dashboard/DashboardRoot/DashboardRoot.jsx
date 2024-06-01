import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardRoot = () => {
    return (
        <div>
            this is menu
            <Outlet />
        </div>
    );
};

export default DashboardRoot;