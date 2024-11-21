import React, { useContext } from 'react';
import { RiseLoader } from 'react-spinners';
import DashboardMediumScreen from '../../../Components/DashboardMediumScreen';
import DashboardMobile from '../../../Components/DashboardMobile';
import { UserContext } from '../../../Providers/UserInfoProvider';
import { useLocation } from 'react-router-dom';

const DashboardRoot = () => {

    const { userDetails, isLoading } = useContext(UserContext);
    const location = useLocation();
    const role = userDetails?.role;

    if (isLoading) {
        return <RiseLoader color="#36d7b7" />
    };

    return (

        <div>
            {/* ---------------------- FOR MEDIUM ------------------------ */}
            <div className='hidden md:block'>
                <DashboardMediumScreen role={role} pathName={location?.pathname}/>
            </div>

            {/* ---------------------- FOR MOBILE ------------------------ */}
            <div className='md:hidden'>
                <DashboardMobile role={role} pathName={location?.pathname}/>
            </div>
        </div>
    );
};

export default DashboardRoot;