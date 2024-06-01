import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            this is header
            <Outlet/>
            this is footer
        </div>
    );
};

export default Root;