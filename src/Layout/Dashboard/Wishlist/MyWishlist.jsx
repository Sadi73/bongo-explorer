import React, { useContext, useEffect, useState } from 'react';
import PackageCard from '../PackageCard/PackageCard';
import axios from 'axios';
import { AuthContext } from '../../../Providers/AuthProvider';
import EmptyPage from '../EmptyPage/EmptyPage';

const MyWishlist = () => {
    const { user } = useContext(AuthContext);

    const [myWishedData, setMyWishedData] = useState([]);

    useEffect(() => {
        axios.get(`https://bongo-traveler.vercel.app/wishlist/all?email=${user?.email}`)
            .then(res => setMyWishedData(res?.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className='mt-10'>

            {myWishedData.length > 0 ? myWishedData.map(item => <div key={item?._id} className='mb-5 shadow-xl'>
                <PackageCard />
            </div>) : <EmptyPage />}

        </div>
    );
};

export default MyWishlist;