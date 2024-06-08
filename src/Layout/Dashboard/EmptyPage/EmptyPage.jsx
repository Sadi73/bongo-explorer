import React from 'react';
import { BsCartDashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const EmptyPage = () => {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <BsCartDashFill className='text-7xl'/>
            <p>You do not have any booked item yet.</p>
            <Link className='text-teal-500' to='/package/all'>View Package</Link>
        </div>
    );
};

export default EmptyPage;