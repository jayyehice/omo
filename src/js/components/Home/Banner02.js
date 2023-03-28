import React, { Component } from "react";

const Banner02 = (props) => {
    return (
        <section className="mx-auto w-full sm:w-10/12 my-6 bg-contain sm:bg-auto bg-no-repeat bg-bottom sm:bg-center h-96 anim-fade-in" style={{ backgroundImage: `url("/static/img/banner/banner2.jpg")` }}>
            <div className="w-8/12 sm:w-5/12 ml-16 mt-20 flex items-center justify-between">
                <h3 className="text-3xl sm:text-5xl bg-black rounded-[10px] text-white text-center p-3 y-space-0">排版、製作成品</h3>
                <span className="mdi mdi-arrow-right-bold text-7xl"></span>
                <h3 className="text-3xl sm:text-5xl rounded-[10px] border-4 border-black text-center p-3">一次到位</h3>
            </div>
        </section>
    );
};

export default Banner02;