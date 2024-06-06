import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { RiseLoader } from 'react-spinners';
import { AuthContext } from '../../../Providers/AuthProvider';

const DashboardRoot = () => {

    const { user } = useContext(AuthContext);

    const [gettingData, setGettingData] = useState(true);
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        axios.get(`https://bongo-traveler.vercel.app/users?email=${user?.email}`)
            .then(res => {
                if (res?.data) {
                    setUserInfo(res?.data)
                    setGettingData(false);
                }
            })
            .catch(error => console.log(error))
    }, []);


    if (gettingData) {
        return <RiseLoader color="#36d7b7" />
    };

    return (
        <div className='flex'>
            <div>
                <Sidebar
                    userInfo={userInfo}
                />
            </div>
            <div className='grow px-5'>
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardRoot;