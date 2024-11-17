import { Button, Divider, Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React, { useContext, useState } from 'react';
import { CgAssign, CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { FaCodePullRequest } from 'react-icons/fa6';
import { HiOutlineViewGridAdd } from 'react-icons/hi';
import { IoIosBookmark } from 'react-icons/io';
import { MdOutlineManageAccounts } from 'react-icons/md';
import { PiFireFill } from 'react-icons/pi';
import { TbJewishStar } from 'react-icons/tb';
import { VscThreeBars } from 'react-icons/vsc';
import { Link, Outlet } from 'react-router-dom';
import { RiseLoader } from 'react-spinners';
import { UserContext } from '../../../Providers/UserInfoProvider';

const userItems = [
    {
        key: 'profile',
        path: '/dashboard/my-profile',
        label: 'My Profile',
        icon: <CgProfile />
    },
    {
        key: 'wishlist',
        path: '/dashboard/my-wishlist',
        label: 'My Wishlist',
        icon: <TbJewishStar />
    },
    {
        key: 'bookings',
        path: '/dashboard/my-bookings',
        label: 'My Bookings',
        icon: <IoIosBookmark />
    },
    {
        key: 'request-to-admin',
        path: '/dashboard/request-to-admin',
        label: 'Request To Admin',
        icon: <FaCodePullRequest />
    },
];

const guideItems = [
    {
        key: 'profile',
        path: '/dashboard/my-profile',
        label: 'My Profile',
        icon: <CgProfile />
    },
    {
        key: 'assigned-tour',
        path: '/dashboard/my-assigned-tours',
        label: 'My Assigned Tours',
        icon: <CgAssign />
    },
];

const adminItems = [
    {
        key: 'profile',
        path: '/dashboard/my-profile',
        label: 'My Profile',
        icon: <CgProfile />
    },
    {
        key: 'add-package',
        path: '/dashboard/add-package',
        label: 'Add New Package',
        icon: <HiOutlineViewGridAdd />
    },
    {
        key: 'manage-user',
        path: '/dashboard/manage-user',
        label: 'Manage User',
        icon: <MdOutlineManageAccounts />
    },
];

const DashboardRoot = () => {

    const { userDetails, isLoading } = useContext(UserContext);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const role = userDetails?.role;

    if (isLoading) {
        return <RiseLoader color="#36d7b7" />
    };

    return (

        <Layout className=''>
            <Sider collapsed={isCollapsed} className='sidebar h-screen'>
                <div className='logo p-2.5 flex justify-center'>
                    <div className='logo-icon text-center text-white'>
                        <PiFireFill />
                    </div>
                </div>

                <Menu theme='dark' mode='inline' className='menu-bar h-full flex flex-col gap-2.5'>

                    {role === 'USER' && userItems.map(item =>
                        <Menu.Item key={item?.key} icon={item?.icon}>
                            <Link to={item?.path}>{item?.label}</Link>
                        </Menu.Item>
                    )}

                    {role === 'ADMIN' && adminItems.map(item =>
                        <Menu.Item key={item?.key} icon={item?.icon}>
                            <Link to={item?.path}>{item?.label}</Link>
                        </Menu.Item>
                    )}
                    {role === 'GUIDE' && guideItems.map(item =>
                        <Menu.Item key={item?.key} icon={item?.icon}>
                            <Link to={item?.path}>{item?.label}</Link>
                        </Menu.Item>
                    )}
                    <Divider />

                    <Menu.Item key='home' icon={<FaHome />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                </Menu>
            </Sider>

            <Layout>
                <Header className='bg-white p-0 pl-3'>
                    <Button onClick={() => setIsCollapsed(!isCollapsed)} className='border-0 text-3xl'>
                        <VscThreeBars />
                    </Button>

                    <div className='h-[90vh] overflow-auto'>
                        <Outlet />
                    </div>
                </Header>
            </Layout>

        </Layout>
    );
};

export default DashboardRoot;