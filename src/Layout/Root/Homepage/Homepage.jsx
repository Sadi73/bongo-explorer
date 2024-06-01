import React from 'react';
import Banner from './Banner/Banner';
import TourTravel from './TourAndTravel/TourTravel';
import TourType from './TourType/TourType';

const Homepage = () => {
    return (
        <div>
            <Banner/>

            <TourTravel/>

            <TourType/>
        </div>
    );
};

export default Homepage;