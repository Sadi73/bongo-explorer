import React, { useEffect, useState } from 'react';
import image1 from '../../../assets/Package Image/1.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AllPackages = () => {
    const navigate = useNavigate();
    const [AllPackagesList, setAllPackagesList] = useState([])

    useEffect(() => {
        axios.get('https://bongo-traveler.vercel.app/packages/all')
            .then(res => {
                if (res?.data) {
                    setAllPackagesList(res?.data)
                }
            })
            .catch(error => {
                console.log(error)
            })
    }, []);


    return (
        <div className='pt-20  md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10'>
            {AllPackagesList.map(eachPackage =>
                <div key={eachPackage?.id} className='h-[500px] w-96 relative' onClick={() => navigate(`/package/${eachPackage?.id}`)}>
                    <img src={image1} alt="" className='h-full hover:scale-110 transition-transform duration-300' />

                    <div className='absolute top-0 right-0 text-white text-xl font-bold p-3'>
                        <p>$500</p>
                    </div>

                    <div className='absolute bottom-0 bg-black bg-opacity-50 text-white px-5 py-2'>
                        <h1>Package Name</h1>
                        <div className='flex items-center justify-between'>
                            <p>9.5</p>
                            <div>
                                <p>Rating</p>
                                <p>number of rating</p>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio ducimus exercitationem distinctio harum autem eos.</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default AllPackages;