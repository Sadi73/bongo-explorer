import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import axios from 'axios';
import Swal from 'sweetalert2';
import EmptyPage from '../../Dashboard/EmptyPage/EmptyPage';
import Heading from '../../../Components/Heading';

const Packages = () => {

    const { user } = useContext(AuthContext);
    const [allPackages, setAllPackages] = useState([]);

    const slicedData = allPackages.slice(0, 8);

    const handleWishlist = (packageId) => {

        if (!user) {
            Swal.fire({
                title: "Please login first to add in wishlist",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
            });
            return
        }

        const wishedPackage = {};
        wishedPackage.touristName = user?.displayName;
        wishedPackage.touristEmail = user?.email;
        wishedPackage.touristPhoto = user?.photoURL;
        wishedPackage.packageId = packageId;

        axios.get(`https://bongo-traveler.vercel.app/wishlist/all?email=${user?.email}`)
            .then(res => {
                if (res?.data) {
                    const usersWishlist = [...res?.data];
                    const itemExisted = usersWishlist.find(item => item?.packageId === packageId);

                    if (!itemExisted) {
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



    };


    useEffect(() => {
        axios.get('https://bongo-traveler.vercel.app/packages/all')
            .then(res => {
                setAllPackages(res?.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <div className=''>
            {allPackages?.length > 0 ?
                <div className='space-y-10'>
                    <Heading
                        title='Top Packages'
                        subTitle='Find Your Dream Destination'
                    />

                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                        {slicedData.map(eachPackage =>
                            <div key={eachPackage?.id} className='relative border rounded-lg shadow-xl h-[350px] p-3 space-y-3'>
                                <img src={eachPackage?.imageURL} alt="" className='h-2/3 w-full rounded-lg' />

                                <div
                                    className='absolute top-2 right-5 cursor-pointer text-white'
                                    onClick={() => handleWishlist(eachPackage?.id)}
                                >
                                    <FaRegHeart />
                                </div>

                                <div>
                                    <h1 className='text-center font-mono'>{eachPackage?.title}</h1>
                                    <p className='text-center italic'>{eachPackage?.type}</p>
                                    <Link to={`/package/${eachPackage?.id}`}><button className='text-center w-full mt-5 underline'>MORE</button></Link>
                                </div>
                            </div>

                        )}

                    </div>

                    <div className='flex justify-center'>
                        <Link to='/package/all'><button className='bg-teal-500 p-3 text-white'>View All Packages</button></Link>
                    </div>
                </div> :
                <EmptyPage
                    message='Currently No Package Available'
                    linkMessage={false}
                />
            }
        </div>
    );
};

export default Packages;