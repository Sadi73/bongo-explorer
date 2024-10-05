import React from 'react';
import { Carousel } from 'antd';
import img1 from '../../../../assets/BannerImages/1.jpg';
import img3 from '../../../../assets/BannerImages/3.jpg';
import img5 from '../../../../assets/BannerImages/5.jpg';
import img8 from '../../../../assets/BannerImages/8.jpeg';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
const Banner = () => (
    <Carousel autoplay>
        
        <div className="relative w-full h-[700px]">
            <img src={img1} className="w-full h-full object-cover" alt="gradient overlay image" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                <span className="absolute bottom-10 right-96 text-white/60 text-6xl font-bold">Beautiful Rural Bangladesh</span>
            </div>
        </div>
        <div className="relative w-full h-[700px]">
            <img src={img3} className="w-full h-full object-cover" alt="gradient overlay image" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                <span className="absolute bottom-5 left-5 text-white text-2xl font-bold">Ahsan Monjil</span>
            </div>
        </div>
        <div className="relative w-full h-[700px]">
            <img src={img5} className="w-full h-full object-cover" alt="gradient overlay image" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                <span className="absolute bottom-5 right-5 text-white text-2xl font-bold">Sajek Valley</span>
            </div>
        </div>
        <div className="relative w-full h-[700px]">
            <img src={img8} className="w-full h-full object-cover" alt="gradient overlay image" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                <span className="absolute bottom-5 left-5 text-white text-2xl font-bold">Saint Martin Island</span>
            </div>
        </div>
    </Carousel>
);
export default Banner;