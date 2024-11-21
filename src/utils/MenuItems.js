import { CgAssign, CgProfile } from "react-icons/cg";
import { FaCodePullRequest } from "react-icons/fa6";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { IoIosBookmark } from "react-icons/io";
import { MdOutlineManageAccounts } from "react-icons/md";
import { TbJewishStar } from "react-icons/tb";

export const userItems = [
    {
        key: 'profile',
        path: '/dashboard/my-profile',
        label: 'My Profile',
        icon: CgProfile 
    },
    {
        key: 'wishlist',
        path: '/dashboard/my-wishlist',
        label: 'My Wishlist',
        icon: TbJewishStar 
    },
    {
        key: 'bookings',
        path: '/dashboard/my-bookings',
        label: 'My Bookings',
        icon: IoIosBookmark 
    },
    {
        key: 'request-to-admin',
        path: '/dashboard/request-to-admin',
        label: 'Request To Admin',
        icon: FaCodePullRequest 
    },
];

export const guideItems = [
    {
        key: 'profile',
        path: '/dashboard/my-profile',
        label: 'My Profile',
        icon: CgProfile 
    },
    {
        key: 'assigned-tour',
        path: '/dashboard/my-assigned-tours',
        label: 'My Assigned Tours',
        icon: CgAssign 
    },
];

export const adminItems = [
    {
        key: 'profile',
        path: '/dashboard/my-profile',
        label: 'My Profile',
        icon: CgProfile 
    },
    {
        key: 'add-package',
        path: '/dashboard/add-package',
        label: 'Add New Package',
        icon: HiOutlineViewGridAdd 
    },
    {
        key: 'manage-user',
        path: '/dashboard/manage-user',
        label: 'Manage User',
        icon: MdOutlineManageAccounts 
    },
];