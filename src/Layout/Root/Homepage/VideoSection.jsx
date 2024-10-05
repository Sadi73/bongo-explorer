import React from 'react';
import Heading from '../../../Components/Heading';

const VideoSection = () => {
    return (
        <div className='space-y-10'>
            <Heading
                title='Discover Bangladesh'
                subTitle='Experience The Stunning Landscapes And Vibrant Culture'
            />

            <div className='video-wrapper w-full h-[500px] flex justify-center items-center'>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/QNUSIOMb6vI?rel=0&modestbranding=1&controls=1&showinfo=0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoSection;