import React, { Component } from "react";
import Slider from "react-slick";
import ShopLink from '../Common/ShopLink';
import HotSale from './HotSale';
import Banner01 from './Banner01';
import Banner02 from './Banner02';
import News from './News';

const Home = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,  // 一次顯示幾張
        slidesToScroll: 1, // 按下一頁的時候，要跑幾張
    };
    return (
        <div className="mt-5">
            <Slider {...settings} className="mx-auto w-6/12 my-10 shadow-md">
                <div>
                    <img src="/static/img/slider/slider01.jpg" />
                </div>
                <div>
                    <img src="/static/img/slider/slider02.jpg" />
                </div>
                <div>
                    <img src="/static/img/slider/slider03.jpg" />
                </div>
                <div>
                    <img src="/static/img/slider/slider04.jpg" />
                </div>
            </Slider>

            <hr className="my-10" />

            <Banner01 />
            <HotSale />
            <Banner02 />
            <News />
            <ShopLink />

        </div>
    );
};

export default Home;