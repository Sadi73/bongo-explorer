import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { PiFireFill } from 'react-icons/pi';
import { VscThreeBars } from 'react-icons/vsc';
import { Link, Outlet } from 'react-router-dom';
import { adminItems, guideItems, userItems } from '../utils/MenuItems';

const DashboardMediumScreen = ({ role, pathName }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`bg-gray-800 text-white h-screen transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'
                    }`}
            >
                {/* Logo Section */}
                <div className="p-4 flex justify-center items-center">
                    <div className="text-xl">
                        <PiFireFill />
                    </div>
                </div>

                {/* Menu Items */}
                <nav className="flex flex-col gap-4 p-4">
                    {role === 'USER' &&
                        userItems.map((item) => (
                            <Link
                                key={item?.key}
                                to={item?.path}
                                className={`flex items-center gap-4 p-2 rounded hover:bg-gray-700 ${pathName === item?.path ? 'bg-gray-700' : ''}`}
                            >
                                <img src={item?.icon} className='w-5' />
                                {!isCollapsed && <span>{item?.label}</span>}
                            </Link>
                        ))}

                    {role === 'ADMIN' &&
                        adminItems.map((item) => (
                            <Link
                                key={item?.key}
                                to={item?.path}
                                className={`flex items-center gap-4 p-2 rounded hover:bg-gray-700 ${pathName === item?.path ? 'bg-gray-700' : ''}`}
                            >
                                <img src={item?.icon} className='w-5' />
                                {!isCollapsed && <span>{item?.label}</span>}
                            </Link>
                        ))}

                    {role === 'GUIDE' &&
                        guideItems.map((item) => (
                            <Link
                                key={item?.key}
                                to={item?.path}
                                className={`flex items-center gap-4 p-2 rounded hover:bg-gray-700 ${pathName === item?.path ? 'bg-gray-700' : ''}`}
                            >
                                <img src={item?.icon} className='w-5' />
                                {!isCollapsed && <span>{item?.label}</span>}
                            </Link>
                        ))}

                    <hr className="my-4 border-gray-600" />

                    <Link
                        to="/"
                        className="flex items-center gap-4 p-2 rounded hover:bg-gray-700"
                    >
                        <FaHome />
                        {!isCollapsed && <span>Home</span>}
                    </Link>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <header className="bg-white flex items-center justify-between p-4 shadow">
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="text-xl focus:outline-none"
                    >
                        <VscThreeBars />
                    </button>
                </header>

                {/* Outlet Content */}
                <main className="flex-1 overflow-auto p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardMediumScreen;
