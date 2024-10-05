import React from 'react';
import img1 from '../../../assets/BannerImages/1.jpg';

const Banner = () => (
    <div className='space-y-5'>
        <div className="relative w-full h-screen">
            <img src={img1} className="w-full h-full object-cover" alt="gradient overlay image" />
            <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
                <span className="text-white/80 text-4xl md:text-7xl font-serif text-center">
                    Experience the Serenity of Bangladesh
                </span>
            </div>
        </div>

    </div>
);
export default Banner;