import React from 'react';
import travelImage from '../../../../assets/hiking.jpg'

const Overview = () => {
    return (
        <div className='flex gap-3 mt-10'>
            <div>
                <h1>HI!I’M MELISSA</h1>
                <h1>LET’S GO TRAVEL</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nostrum in beatae nihil velit expedita eaque voluptates amet? Adipisci labore facilis minima facere quisquam. Alias vero suscipit quia rem quas?</p>
            </div>

            <div>
                <img src={travelImage} alt="" />
            </div>

        </div>
    );
};

export default Overview;