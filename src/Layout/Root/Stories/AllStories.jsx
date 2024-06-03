import React from 'react';
import storyImg from '../../../assets/storyImage1.jpg'

const AllStories = () => {
    return (
        <div className='pt-20 flex text-center'>
            <div className='bg-[#f9f9f9] leading-8'>
                <p >Australia</p>
                <h1 className='text-2xl'>Want to see the countryside</h1>
                <p >Maria Nur</p>

                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia numquam quos dicta maxime odit dolore quis, necessitatibus nostrum. Aliquid possimus quos ad, modi deleniti at voluptatum placeat ab! Dignissimos, rerum!</p>

                <p>Keep reading...</p>
            </div>

            <div>
                <img src={storyImg} alt="" />
            </div>

        </div>
    );
};

export default AllStories;