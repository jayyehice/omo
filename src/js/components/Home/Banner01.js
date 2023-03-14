import React, { Component } from "react";

const Banner01 = (props) => {
    return (
        <section className="mx-auto w-10/12 my-10 anim-fade-in">
            <div className="flex items-center justify-center">
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