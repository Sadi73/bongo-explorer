import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
import { GiHiking } from 'react-icons/gi';

const types = [
    { name: 'Hiking' },
    { name: 'Sports' },
    { name: 'Walking' },
    { name: 'Wildings' },
    { name: 'Air Rides' },
    { name: 'Cycling' },
    { name: 'Rafting' },
    { name: 'Camping' },
    { name: 'Museum' },
    { name: 'Architecture' },
    { name: 'Historical' },
    { name: 'Fishing' },
];

const TourType = () => {
    return (
        <div className='md:w-[80%] mx-auto space-y-2'>
            <p className='text-center'>Find Your Tour by</p>
            <h1 className='text-center text-3xl'>Tour Type</h1>

            <hr />

            <div className='pt-10'>
                <Swiper
                    slidesPerView={6}
                    spaceBetween={100}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                    style={{ padding: '0 5.5rem 0 2.5rem ' }}
                >
                    {
                        types.map((type, index) =>
                            <SwiperSlide key={index}>
                                <div
                                    style={{ width: '150px', height: '150px', border: '1px solid', borderRadius: '50%', }}
                                    className='flex flex-col items-center justify-center space-y-3'>
                                    <GiHiking className='text-5xl' />
                                    <p className='uppercase font-bold'>{type?.name}</p>
                                </div>
                            </SwiperSlide>
                        )
                    }


                </Swiper>
            </div>

        </div>
    );
};

export default TourType;