import { Divider } from 'antd';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Heading = ({ title, subTitle }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Duration of animations in milliseconds
            // once: true, // Whether animation should happen only once or every scroll
        });
    }, []);

    return (
        <div className='space-y-2'>
            <h1 className='text-center text-3xl' data-aos="zoom-in" data-aos-duration="1000">{title}</h1>
            <div data-aos="fade-up" data-aos-duration="3000">
                <Divider
                    style={{
                        borderColor: '#7cb305',
                    }}
                >
                    {subTitle}
                </Divider>
            </div>

        </div>
    );
};

export default Heading;