import React from 'react';
import image1 from '../../../assets/Package Image/1.jpg'
import { useNavigate } from 'react-router-dom';

const AllPackages = () => {
    const navigate = useNavigate();

    return (
        <div className='pt-20  w-[80%] mx-auto'>
            <div className='h-[500px] w-96 relative' onClick={()=>navigate('/package/1')}>
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

        </div>
    );
};

export default AllPackages;