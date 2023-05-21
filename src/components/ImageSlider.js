import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = (onClose) => {

    const images = [
        { id: 1, src: '/limfna1.jpg' },
        { id: 2, src: '/manikura2.jpg' },
        { id: 3, src: '/manikura3.jpg' },
        { id: 1, src: '/masaze1.jpg' },
        { id: 2, src: '/obrvitrep1.jpg' },
        { id: 3, src: '/pedikura1.jpg' },
        { id: 1, src: '/pedikura2.jpg' },
        { id: 2, src: '/solarij1.jpg' },
        { id: 3, src: '/solarij2.jpg' },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <img key={index} src={image.src} alt="Image" />
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;