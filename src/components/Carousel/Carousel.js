import React from 'react';
import Carousel from 'react-material-ui-carousel';
import CarouselItem from './CarouselItem';

const MyCarousel = () => {
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
        <Carousel>
            {items.map((item, index) => (
                <CarouselItem key={index}>
                    <video src={item.video} controls autoPlay loop />
                    <p>{item.description}</p>
                </CarouselItem>
            ))}
        </Carousel>
    );
};

export default MyCarousel;
