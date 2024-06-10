import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmptyPage from '../../Dashboard/EmptyPage/EmptyPage';

const AllStories = () => {
    const [allStories, setAllStories] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/stories')
            .then(res => setAllStories(res?.data))
            .catch(error => console.log(error))
    }, []);

    console.log(allStories)

    return (
        <div className='pt-28 px-10'>
            {allStories.length > 0 ?
                allStories.map(story =>
                    <div key={story?._id} className='flex text-center mb-8 border shadow-xl rounded-xl justify-between'>
                        <div className='leading-8'>
                            <p >Australia</p>
                            <h1 className='text-2xl'>{story?.name}</h1>
                            <p >Maria Nur</p>
                            <p >{story?.tour_story}</p>
                            <p>Keep reading...</p>
                        </div>

                        <div className='w-1/3'>
                            <img src={story?.tour_image} alt="" className='w-full rounded-r-xl' />
                        </div>
                    </div>) : <EmptyPage />
            }
        </div>
    );
};

export default AllStories;