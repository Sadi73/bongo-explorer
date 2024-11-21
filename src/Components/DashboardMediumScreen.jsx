import { Button, Divider, Layout, Menu } from 'antd';
import { Header } from 'antd/es/layout/layout';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { PiFireFill } from 'react-icons/pi';
import { VscThreeBars } from 'react-icons/vsc';
import { Link, Outlet } from 'react-router-dom';
import { adminItems, guideItems, userItems } from '../utils/MenuItems';

const DashboardMediumScreen = ({role}) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <Layout>
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

export default DashboardMediumScreen;