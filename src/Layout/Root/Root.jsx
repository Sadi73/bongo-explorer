import React, { useContext } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { AuthContext } from '../../Providers/AuthProvider';
import { RiseLoader } from 'react-spinners';

const Root = () => {
    const { loading } = useContext(AuthContext);

    if (loading) {
        return <RiseLoader color="#36d7b7" />
    }

    return (
        <div>
            <ScrollRestoration />
            <Navbar />
            <div className='min-h-screen'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;