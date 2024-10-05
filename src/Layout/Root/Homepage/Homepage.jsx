import React from 'react';
import Banner from './Banner';
import TourType from './TourType/TourType';
import Stories from './Stories/Stories';
import CarouselSection from './CarouselSection';
import Overview from './Overview';
import VideoSection from './VideoSection';
import MeetGuides from './MeetGuides';
import Packages from './Packages';

const Homepage = () => {


    return (
        <div className='space-y-10'>
            <Banner />

            <div className='w-[80%] mx-auto space-y-32'>
                <Overview />

                <CarouselSection />

                <VideoSection />

                <Packages />

                <MeetGuides />

                <TourType />

                <Stories />
            </div>

        </div>
    );
};

export default Homepage;