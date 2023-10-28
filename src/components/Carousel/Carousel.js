import React from 'react';
import VidCarousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem';

const Carousel = () => {
    const items = [
        {
            video: 'video1.mp4',
            description: 'Video 1'
        },
        {
            video: 'video2.mp4',
            description: 'Video 2'
        }
    ];

    return (
        <VidCarousel>
            {items.map((item, index) => (
                <CarouselItem key={index}>
                    <video src={item.video} controls autoPlay loop />
                    <p>{item.description}</p>
                </CarouselItem>
            ))}
        </VidCarousel>
    );
};

export default Carousel;
