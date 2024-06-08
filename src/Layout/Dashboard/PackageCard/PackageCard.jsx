import React from 'react';
import img from '../../../assets/hiking.jpg';
import { Button } from 'antd';

const PackageCard = ({packageInfo}) => {
    return (
        <div className='flex gap-10 border shadow-xl rounded-lg p-5'>
            <div>
                <img src={img} alt="" className='w-96 rounded-lg' />
            </div>

            <div className='w-[60%]'>
                <h1>Package Name</h1>
                <p>Guided By: </p>
                <p>Price</p>
                <p>Date:</p>
                <p>Status</p>
            </div>

            <div className='flex flex-col'>
                <Button type="primary" danger ghost>Danger</Button>
                <Button type="primary">Details</Button>
                <Button type="primary" danger ghost>Cancel</Button>
                <Button type="primary">Pay Now</Button>
            </div>

        </div>
    );
};

export default PackageCard;