import React from 'react';
import { Carousel } from 'antd';
import img2 from '../../../assets/BannerImages/2.jpg';
import img3 from '../../../assets/BannerImages/3.jpg';
import img4 from '../../../assets/BannerImages/4.jpg';
import img5 from '../../../assets/BannerImages/5.jpg';
import img8 from '../../../assets/BannerImages/8.jpeg';
import Heading from '../../../Components/Heading';

const CarouselSection = () => {
    return (
        <div className='space-y-10'>
            <Heading
                title='Popular Destination'
                subTitle='Find where most of the traveler explore most'
            />

            <Carousel autoplay>
                <div className="relative w-full h-[500px]">
                    <img src={img2} className="w-full h-full object-cover" alt="gradient overlay image" />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent">
                        <div className="absolute bottom-10 right-5 text-white w-[500px] space-y-3">
                            <h1 className="text-5xl font-semibold">Rural Bangladesh</h1>
                            <p className='font-light'>Rural Bangladesh is a land of natural beauty, where vast green fields, rivers, and traditional villages create a serene atmosphere. Its vibrant culture, simple lifestyle, and agricultural heritage reflect deep-rooted traditions and harmony.</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[500px]">
                    <img src={img8} className="w-full h-full object-cover" alt="gradient overlay image" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
                        <div className="absolute bottom-10 left-5 text-white w-[500px] space-y-3">
                            <h1 className="text-5xl font-semibold">Saint Martin Island</h1>
                            <p className='font-light'>Saint Martin’s Island, located in the Bay of Bengal, is Bangladesh's only coral island. Known for its crystal-clear waters, sandy beaches, and vibrant marine life, it's a tranquil destination ideal for nature lovers and explorers.</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[500px]">
                    <img src={img3} className="w-full h-full object-cover" alt="gradient overlay image" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                        <div className="absolute bottom-10 right-5 text-white w-[500px] space-y-3">
                            <h1 className="text-5xl font-semibold">Ahsan Monzil</h1>
                            <p className='font-light'>Residence of the Nawab of Dhaka and is an iconic symbol of the city’s heritage. It was built in the 19th century, it features a blend of Mughal and European architectural styles</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[500px]">
                    <img src={img5} className="w-full h-full object-cover" alt="gradient overlay image" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                        <div className="absolute bottom-10 left-5 text-white w-[500px] space-y-3">
                            <h1 className="text-5xl font-semibold">Sajek Valley</h1>
                            <p className='font-light'>Nestled in the hills of the Chittagong Hill Tracts, is a breathtaking destination known for its rolling hills, lush greenery, and misty clouds. It's a peaceful haven offering stunning views and a serene atmosphere.</p>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-[500px]">
                    <img src={img4} className="w-full h-full object-cover" alt="gradient overlay image" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                        <div className="absolute bottom-10 right-5 text-white w-[500px] space-y-3">
                            <h1 className="text-5xl font-semibold">Saat Gambuj Mosque</h1>
                            <p className='font-light'>It is a UNESCO World Heritage site. Built by Khan Jahan Ali in the 15th century, it's known for its seven distinctive domes, intricate terracotta work, and rich Islamic architecture.</p>
                        </div>
                    </div>
                </div>


            </Carousel>

        </div>
    );
};

export default CarouselSection;