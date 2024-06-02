import React from 'react';
import image from '../../../../assets/hiking.jpg'
import { Link } from 'react-router-dom';

const Packages = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-5 md:px-0'>
            <div className='flex border gap-5'>
                <img src={image} alt="" className='w-1/2' />
                <div className='flex flex-col p-3'>
                    <div className='flex-1'>
                        <h1>Package Name</h1>
                        <p>Bandorban</p>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat?</p>
                    </div>
                    <Link><button className='bg-teal-500 text-white p-2'>View Details</button></Link>
                </div>
            </div>
            <div className='flex border gap-5'>
                <img src={image} alt="" className='w-1/2' />
                <div className='flex flex-col p-3'>
                    <div className='flex-1'>
                        <h1>Package Name</h1>
                        <p>Bandorban</p>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat?</p>
                    </div>
                    <Link><button className='bg-teal-500 text-white p-2'>View Details</button></Link>
                </div>
            </div>
            <div className='flex flex-row-reverse border gap-5'>
                <img src={image} alt="" className='w-1/2' />
                <div className='flex flex-col p-3'>
                    <div className='flex-1'>
                        <h1>Package Name</h1>
                        <p>Bandorban</p>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat?</p>
                    </div>
                    <Link><button className='bg-teal-500 text-white p-2'>View Details</button></Link>
                </div>
            </div>
            <div className='flex flex-row-reverse border gap-5'>
                <img src={image} alt="" className='w-1/2' />
                <div className='flex flex-col p-3'>
                    <div className='flex-1'>
                        <h1>Package Name</h1>
                        <p>Bandorban</p>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat?</p>
                    </div>
                    <Link><button className='bg-teal-500 text-white p-2'>View Details</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Packages;