import React from 'react';
import image from '../../../../assets/hiking.jpg'
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';

const Packages = ({ allPackages }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-5 md:px-0'>
            {allPackages.map(eachPackage =>
                <div key={eachPackage?.id} className='flex border gap-5 h-60 rounded-lg shadow-xl'>
                    <div className='w-[60%] relative'>
                        <img src={image} alt="" className='w-full h-full rounded-lg' />

                        <div className='bg-white bg-opacity-50 px-3 py-2 absolute top-0 right-0 cursor-pointer'>
                            <FaRegHeart />
                        </div>
                    </div>

                    <div className='flex flex-col p-3'>
                        <div className='flex-1'>
                            <h1>Package Name</h1>
                            <p>Bandorban</p>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat?</p>
                        </div>
                        <Link to={`/package/${eachPackage?.id}`}><button className='bg-teal-500 text-white p-2 w-full'>View Details</button></Link>
                    </div>
                </div>

            )}

        </div>
    );
};

export default Packages;