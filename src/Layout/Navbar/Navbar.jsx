import React, { useState } from 'react';
import './Navbar.css';
import MenuBar from './MenuBar';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';



const Navbar = () => {

    const [user, setUser] = useState(null);

    const items = [
        {
            key: '1',
            label: (
                <Link to="/update-profile">Update Profile</Link>
            ),
        },
        {
            label: 'Log Out',
            key: '2',
            // onClick: () => handleLogOut()
        },
    ];

    return (
        <div className='navbar shadow-lg'>
            <div className='navbar-start'>
                {/* ------------ FOR MOBILE SCREEN -------------- */}
                <div className='md:hidden'>
                    <MenuBar />
                </div>

                <Link to="/"><button className='text-3xl font-medium text-teal-500'>Bongo Explorer</button></Link>
            </div>


            {/* ------------------- FOR MEDIUM DEVICE -------------------- */}
            <div className='navbar-center hidden md:flex'>
                <ul className='menu menu-horizontal '>
                    <li className='mx-5 text-teal-500'><Link to="/">Home</Link></li>
                    <li className='mx-5 text-teal-500'><Link to="/package/all">Packages</Link></li>
                    <li className='mx-5 text-teal-500'><Link to="/story/all">Stories</Link></li>
                    <li className='mx-5 text-teal-500'><Link to="/dashboard">Dashboard</Link></li>
                </ul>
            </div>

            <div className='navbar-end'>
                {/* -------------- LOGIN & REGISTER BUTTON ------------ */}
                <div className='flex gap-3'>
                    <Link to="/login"><button className='border px-5 py-3 text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white'>Login</button></Link>
                    <Link to="/register"><button className='border px-5 py-3 text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white'>Register</button></Link>
                </div>

                {/* ---------------- PROFILE SECTION -------------- */}
                {/* <div className='flex gap-2 items-center'>
                    <div className='text-sm'>
                        {user?.email}
                    </div>
                    <Dropdown
                        menu={{ items }}
                        trigger={['click']}
                    >
                        <Avatar
                            src={user?.photoURL}
                            style={{
                                backgroundColor: '#87d068',
                                cursor: 'pointer',
                            }}
                            icon={<UserOutlined />}
                        />

                    </Dropdown>
                </div> */}
            </div>

        </div >
    );
};

export default Navbar;