import React, { useEffect, useState } from 'react';
import Overview from './Overview';
import Packages from './Packages';
import MeetGuides from './MeetGuides';
import axios from 'axios';

const TourTravel = () => {

    const [allPackages, setAllPackages] = useState([]);

    useEffect(() => {
        axios.get('https://bongo-traveler.vercel.app/packages/all')
            .then(res => {
                setAllPackages(res?.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <div className='md:w-[80%] mx-auto my-20'>

            <div style={{ background: 'white', paddingTop: '12px' }}>
                <Overview />
                <Packages allPackages={allPackages} />
                <MeetGuides />
            </div>

        </div>
    );
};

export default TourTravel;