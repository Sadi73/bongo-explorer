import addNew from '../assets/svg/addNew.svg';
import assigned from '../assets/svg/assigned.svg';
import booking from '../assets/svg/booking.svg';
import manageUser from '../assets/svg/manageUser.svg';
import profileIcon from '../assets/svg/profile.svg';
import request from '../assets/svg/request.svg';
import wishlist from '../assets/svg/wishlist.svg';

export const userItems = [
    {
        key: 'profile',
        path: '/dashboard/my-profile',
        label: 'My Profile',
        icon: profileIcon 
    },
    {
        key: 'wishlist',
        path: '/dashboard/my-wishlist',
        label: 'My Wishlist',
        icon: wishlist 
    },
    {
        key: 'bookings',
        path: '/dashboard/my-bookings',
        label: 'My Bookings',
        icon: booking 
    },
    {
        key: 'request-to-admin',
        path: '/dashboard/request-to-admin',
        label: 'Request To Admin',
        icon: request 
    },
];

export const guideItems = [
    {
        key: 'profile',
        path: '/dashboard/my-profile',
        label: 'My Profile',
        icon: profileIcon 
    },
    {
        key: 'assigned-tour',
        path: '/dashboard/my-assigned-tours',
        label: 'My Assigned Tours',
        icon: assigned 
    },
];

export const adminItems = [
    {
        key: 'profile',
        path: '/dashboard/my-profile',
        label: 'My Profile',
        icon: profileIcon 
    },
    {
        key: 'add-package',
        path: '/dashboard/add-package',
        label: 'Add New Package',
        icon: addNew 
    },
    {
        key: 'manage-user',
        path: '/dashboard/manage-user',
        label: 'Manage User',
        icon: manageUser 
    },
];