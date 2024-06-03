import React from 'react';
import './Stories.css';
import image from '../../../../assets/storyImage1.jpg'

const images = [
    { src: image, text: 'Text for Image 1' },
    { src: image, text: 'Text for Image 2' },
    { src: image, text: 'Text for Image 3' },
    { src: image, text: 'Text for Image 4' },
    { src: image, text: 'Text for Image 4' },
    { src: image, text: 'Text for Image 4' },
    { src: image, text: 'Text for Image 4' },
    { src: image, text: 'Text for Image 4' },
    { src: image, text: 'Text for Image 4' },
    { src: image, text: 'Text for Image 4' },
    { src: image, text: 'Text for Image 4' },
];

const Stories = () => {
    return (
        <div className='w-[80%] mx-auto my-20 space-y-5'>
            <h1 className='text-3xl text-center'>Traveler Story</h1>

            <div className="container grid grid-cols-4">
                {images.map((image, index) => (
                    <div className="image-card" key={index}>
                        <img src={image.src} alt={`Image ${index + 1}`} />
                        <div className="overlay">{image.text}</div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Stories;