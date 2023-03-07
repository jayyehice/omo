import React, { Component, useLayoutEffect, useRef } from "react";

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Banner01 = (props) => {
    const main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context((self) => {
            const boxes = self.selector('.banner-1');
            boxes.forEach((box, i) => {
                const anim = gsap.fromTo(
                    box,
                    { autoAlpha: 0, y: 50 },
                    { duration: 0.5, autoAlpha: 1, y: 0 }
                );
                ScrollTrigger.create({
                    trigger: box,
                    start: 'top 65%',
                    end: 'top 35%',
                    animation: anim,
                    toggleActions: 'play none none none',
                    markers: false,
                    once: true,
                });
            });
        }, main); // <- Scope!
        return () => ctx.revert(); // <- Cleanup!
    }, []);

    return (
        <section className="mx-auto w-10/12 my-10" ref={main}>
            <div className="flex items-center justify-center banner-1">
                <img className="max-w-1/2 shadow-lg rounded-lg mr-5" src="/static/img/banner/banner01-1.jpg" alt="" />
                <div className="max-w-1/2 shadow-lg rounded-lg p-10 bg-gray-200 space-y-10">
                    <img src="/static/img/banner/banner01-2.png" alt="" />
                    <h3 className="text-4xl font-bold mt-10">客製禮品</h3>
                    <div className="flex justify-end">
                        <span className="mdi mdi-play text-3xl"></span>
                        <h3 className="text-3xl font-medium">為您專屬打造</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner01;