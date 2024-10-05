import { Divider } from 'antd';
import React from 'react';

const Heading = ({ title, subTitle }) => {
    return (
        <div className='space-y-2'>
            <h1 className='text-center text-3xl'>{title}</h1>
            <Divider
                style={{
                    borderColor: '#7cb305',
                }}
            >
                {subTitle}
            </Divider>
            
        </div>
    );
};

export default Heading;