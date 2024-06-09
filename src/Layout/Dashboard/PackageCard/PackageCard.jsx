import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const PackageCard = ({ type, packageInfo, packageDetails }) => {
    const navigate = useNavigate();


    return (
        <div className='flex items-center gap-10 border shadow-xl rounded-lg p-5'>
            <div>
                <img src={packageDetails?.imageURL} alt="" className='w-96 h-64 rounded-lg' />
            </div>

            <div className='w-[60%] leading-7'>
                <h1><span className='font-bold'>Package Name:</span> {packageDetails?.title}</h1>
                <p><span className='font-bold'>Description:</span> {packageDetails?.description}</p>
                {type === 'bookings' &&
                    <>
                        <p><span className='font-bold'>Guided By</span>: {packageInfo?.guide}</p>
                        <p><span className='font-bold'>Price:</span> ${packageInfo?.price}</p>
                        <p><span className='font-bold'>Date:</span> {packageInfo?.date}</p>
                        <p><span className='font-bold'>Status:</span> {packageInfo?.status}</p>
                    </>
                }
            </div>

            <div className='flex flex-col  gap-5'>
                {type === 'wishlist' ?
                    <>
                        <Button type="primary" danger ghost>Remove</Button>
                        <Button type="primary" onClick={()=>navigate(`/package/${packageDetails?.id}`)}>Details</Button>
                    </> :
                    <>
                        <Button type="primary" danger ghost>Cancel</Button>
                        <Button type="primary">Pay Now</Button>
                    </>
                }
            </div>

        </div>
    );
};

export default PackageCard;