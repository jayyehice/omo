import React, { Component, useLayoutEffect, useRef, useEffect } from "react";
import Slider from "react-slick";
import ShopLink from '../Common/ShopLink';
import HotSale from './HotSale';
import Banner01 from './Banner01';
import Banner02 from './Banner02';
import News from './News';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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

    const main = useRef();
    const q = gsap.utils.selector(main);

    useEffect(() => {

        const fade_ins = q(".anim-fade-in");

        fade_ins.forEach((section, i) => {

            const anim = gsap.fromTo(
                section,
                { autoAlpha: 0, y: 100 },
                { duration: 1.5, autoAlpha: 1, y: 0 }
            );

            ScrollTrigger.create({
                trigger: section,
                animation: anim,
                start: "-100px center",
                end: "top 300px",
                toggleActions: 'play none none none',
                markers: false,
                // once: false,
            });

        });

    }, []);

    
    return (
        <div className="mt-5" ref={main}>
            <Slider {...settings} className="mx-auto w-11/12 my-10 shadow-md lg:w-6/12">
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