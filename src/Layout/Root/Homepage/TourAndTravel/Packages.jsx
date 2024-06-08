import React, { useContext } from 'react';
import image from '../../../../assets/hiking.jpg'
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { AuthContext } from '../../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';

const Packages = ({ allPackages }) => {

    const { user } = useContext(AuthContext);

    const handleWishlist = (packageId) => {
        const wishedPackage = {};
        wishedPackage.touristName = user?.displayName;
        wishedPackage.touristEmail = user?.email;
        wishedPackage.touristPhoto = user?.photoURL;
        wishedPackage.packageId = packageId;

        axios.get('https://bongo-traveler.vercel.app/wishlist/all')
            .then(res => {
                if (res?.data.length > 0) {
                    const wishlistData = [...res?.data];
                    const itemFound = wishlistData.find(item => item?.packageId === packageId && item?.touristEmail === user?.email);
                    if (!itemFound) {
                        axios.post('https://bongo-traveler.vercel.app/wishlist/add', wishedPackage)
                            .then(res => {
                                if (res?.data?.insertedId) {
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "This package has been saved as wishlist",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            })
                            .catch(error => {
                                console.log(error)
                            })
                    } else {
                        Swal.fire({
                            position: "top-end",
                            title: "This package has already been saved as wishlist",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            })
            .catch(error => {
                console.log(error)
            })



    }


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-5 md:px-0'>
            {allPackages.map(eachPackage =>
                <div key={eachPackage?.id} className='flex border gap-5 h-60 rounded-lg shadow-xl'>
                    <div className='w-[60%] relative'>
                        <img src={image} alt="" className='w-full h-full rounded-lg' />

                        <div
                            className='bg-white bg-opacity-50 px-3 py-2 absolute top-0 right-0 cursor-pointer'
                            onClick={() => handleWishlist(eachPackage?.id)}
                        >
                            <FaRegHeart />
                        </div>
                    </div>

                    <div className='flex flex-col p-3'>
                        <div className='flex-1'>
                            <h1>Package Name</h1>
                            <p>Bandorban</p>
                            <hr />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quaerat?</p>
                        </div>
                        <Link to={`/package/${eachPackage?.id}`}><button className='bg-teal-500 text-white p-2 w-full'>View Details</button></Link>
                    </div>
                </div>

            )}

        </div>
    );
};

export default Packages;