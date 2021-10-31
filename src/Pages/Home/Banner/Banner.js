import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner2.jpg';
import banner2 from '../../../images/banner/banner3.jpg';
import banner3 from '../../../images/banner/2.jpg';
import "./Banner.css"


const Banner = () => {
    return (
        // show banner info
        <Carousel variant="dark">
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h2 className="" style={{ color: "royalblue" }}>A journey of a thousand miles begins with a single step</h2>
                    <p className="fw-bold" style={{ color: "tomato" }}>Lao Tzu</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2 style={{ color: "royalblue" }}>Go instead where there is no path and leave a trail</h2>
                    <p className="fw-bold" style={{ color: "tomato" }}>Ralph Waldo Emerson </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2 style={{ color: "royalblue" }}>Man cannot discover new oceans unless he has the courage to lose sight of the shore</h2>
                    <p className="fw-bold" style={{ color: "tomato" }}>Mary Anne Radmacher</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;