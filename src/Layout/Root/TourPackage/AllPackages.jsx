import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import EmptyPage from '../../Dashboard/EmptyPage/EmptyPage';
import { Rate } from 'antd';
import { RiseLoader } from 'react-spinners';

const AllPackages = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams()

    const [AllPackagesList, setAllPackagesList] = useState([]);
    const [loaderVisible, setLoaderVisible] = useState(true);

    useEffect(() => {
        axios.get('https://bongo-traveler.vercel.app/packages/all')
            .then(res => {
                setLoaderVisible(false);
                if (res?.data) {
                    if (searchParams.get("type")) {
                        const filteredData = res.data.filter(item => (item?.type).toLowerCase() === (searchParams.get("type").toLowerCase()));
                        setAllPackagesList(filteredData);
                        return
                    }
                    setAllPackagesList(res?.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    if (loaderVisible) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <RiseLoader color="#36d7b7" />
            </div>
        );
    };

    return (
        <div className='pt-28 md:w-[80%] mx-auto'>
            {AllPackagesList?.length > 0 ?
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {AllPackagesList.map(eachPackage =>
                        <div
                            key={eachPackage?.id}
                            className='h-[350px] relative overflow-hidden group'  // 'group' added for hover targeting
                            onClick={() => navigate(`/package/${eachPackage?.id}`)}
                        >
                            {/* Image with hover effect */}
                            <img src={eachPackage?.imageURL} alt="" className='h-full w-full transition-transform duration-300 hover:scale-110' />

                            {/* Gradient Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none'></div>

                            <div className='absolute top-0 right-0 text-white text-xl font-bold p-3 z-10'>
                                <p>${eachPackage?.price}</p>
                            </div>

                            {/* Container for title, rating, and description */}
                            <div className='absolute bottom-0 w-full text-white px-5 py-3 z-10 bg-gradient-to-t from-black/60 to-transparent'>
                                {/* Title and Rating (always visible) */}
                                <div className='flex flex-col space-y-1'>
                                    <h1 className='text-xl font-mono'>{eachPackage?.title}</h1>
                                    <Rate allowHalf disabled defaultValue={4.5} />
                                </div>

                                {/* Description (hidden by default, displayed on hover) */}
                                <p className='hidden group-hover:block'>
                                    {eachPackage?.description.slice(0, 100) + ' ... '}
                                </p>
                            </div>
                        </div>

                    )}
                </div> :
                <EmptyPage
                    message='Currently No Package Available'
                />
            }

        </div>
    );
};

export default AllPackages;