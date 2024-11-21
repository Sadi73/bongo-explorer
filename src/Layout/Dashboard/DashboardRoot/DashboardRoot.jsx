import React, { useContext } from 'react';
import { RiseLoader } from 'react-spinners';
import DashboardMediumScreen from '../../../Components/DashboardMediumScreen';
import DashboardMobile from '../../../Components/DashboardMobile';
import { UserContext } from '../../../Providers/UserInfoProvider';

const DashboardRoot = () => {

    const { userDetails, isLoading } = useContext(UserContext);
    const role = userDetails?.role;

    if (isLoading) {
        return <RiseLoader color="#36d7b7" />
    };

    return (

        <div>
            {/* ---------------------- FOR MEDIUM ------------------------ */}
            <div className='hidden md:block'>
                <DashboardMediumScreen role={role} />
            </div>

            {/* ---------------------- FOR MOBILE ------------------------ */}
            <div className='md:hidden'>
                <DashboardMobile role={role} />
            </div>
        </div>
    );
};

export default DashboardRoot;