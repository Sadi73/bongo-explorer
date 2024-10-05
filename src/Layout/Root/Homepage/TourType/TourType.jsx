import React from 'react';
import { GiBoatFishing, GiCampingTent, GiHiking, GiSmallFishingSailboat, GiWildfires } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import Heading from '../../../../Components/Heading';
import { LiaBicycleSolid } from 'react-icons/lia';
import { FaPersonWalking } from 'react-icons/fa6';
import { MdArchitecture, MdMuseum, MdSportsBaseball } from 'react-icons/md';

const types = [
    { name: 'hiking', icon: <GiHiking className='text-5xl' /> },
    { name: 'sports', icon: <MdSportsBaseball className='text-5xl' /> },
    { name: 'walking', icon: <FaPersonWalking className='text-5xl' /> },
    { name: 'wildings', icon: <GiWildfires className='text-5xl' /> },
    { name: 'cycling', icon: <LiaBicycleSolid className='text-5xl' /> },
    { name: 'rafting', icon: <GiSmallFishingSailboat className='text-5xl' /> },
    { name: 'camping', icon: <GiCampingTent className='text-5xl' /> },
    { name: 'museum', icon: <MdMuseum className='text-5xl' /> },
    { name: 'architecture', icon: <MdArchitecture className='text-5xl' /> },
    { name: 'fishing', icon: <GiBoatFishing className='text-5xl' /> },
];

const TourType = () => {

    const navigate = useNavigate();

    return (
        <div className='space-y-10'>

            <Heading
                title='Tour Type'
                subTitle='Find Your Tour By'
            />

            <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>
                {types?.map((type, index) =>
                    <div
                        key={index}
                        className='flex items-center justify-center gap-5 border px-5 py-3 rounded-lg cursor-pointer hover:shadow-lg'
                        onClick={() => navigate(`/package/all?type=${type?.name}`)}
                    >
                        {type?.icon}
                        <p className='uppercase font-bold'>{type?.name}</p>
                    </div>)
                }
            </div>

        </div>
    );
};

export default TourType;