import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmptyPage from '../../Dashboard/EmptyPage/EmptyPage';
import { RiseLoader } from 'react-spinners';

const AllStories = () => {
    const [allStories, setAllStories] = useState([]);
    const [loaderVisible, setLoaderVisible] = useState(true);

    useEffect(() => {
        axios.get('https://bongo-traveler.vercel.app/stories')
            .then(res => {
                setLoaderVisible(false);
                setAllStories(res?.data);
            })
            .catch(error => console.log(error))
    }, []);

    if (loaderVisible) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <RiseLoader color="#36d7b7" />
            </div>
        );
    };

    return (
        <div className='pt-28 px-10'>
            {allStories.length > 0 ?
                allStories.map(story =>
                    <div key={story?._id} className='flex flex-col md:flex-row text-center mb-8 border shadow-xl rounded-xl justify-between'>
                        <div className='leading-8'>
                            <p >Australia</p>
                            <h1 className='text-2xl'>{story?.name}</h1>
                            <p >Maria Nur</p>
                            <p >{story?.tour_story}</p>
                            <p>Keep reading...</p>
                        </div>

                        <div className='md:w-1/3'>
                            <img src={story?.tour_image} alt="" className='w-full h-full rounded-r-xl' />
                        </div>
                    </div>) : <EmptyPage />
            }
        </div>
    );
};

export default AllStories;