import React, { Component } from "react";

const HotSale = (props) => {

    let production_list = [
        { title: '旋轉碟', content: '多款顏色、隨興搭配', img: '/static/img/hot_sale/hot_sale_1.jpg', link: '/products/pages/?product=0' },
        { title: '鋁管碟', content: '品質卓越、提升形象', img: '/static/img/hot_sale/hot_sale_2.jpg', link: '/products/pages/?product=1' },
        { title: '迷你碟', content: '超小體積、方便攜帶', img: '/static/img/hot_sale/hot_sale_3.jpg', link: '/products/pages/?product=2' },
    ];

    const productionList = production_list.map((obj, index) => {
        return (
            <li key={index} className="w-full mb-5 sm:mb-0 sm:w-1/4">
                <a href={obj.link} className="block border border-blue-200 flex flex-col h-full rounded-lg p-5 bg-white">
                    <div className="h-1/2 hover:shadow-lg ease-linear duration-300 flex items-center justify-center grow py-3 mb-3">
                        <img className="w-4/5" src={obj.img} />
                    </div>
                    <div className="pt-3 flex items-center justify-between">
                        <p className="text-xl font-semibold">{obj.title}</p>
                        <span className="mdi mdi-heart-outline text-gray-500 hover:text-black text-2xl"></span>
                    </div>
                    <p className="pt-1 text-gray-900">{obj.content}</p>
                </a>
            </li>
        )
    });

    return (
        <div className="bg-gray-100 anim-fade-in">
            <div className="container mx-auto flex items-center flex-wrap pt-10 pb-12 w-9/12 sm:w-7/12">
                <h2 className="w-full text-4xl font-bold text-center"><span className="mdi mdi-fire text-red-600"></span>熱銷商品</h2>
                <ul className="w-full p-6 sm:flex sm:justify-between my-5">
                    {productionList}
                </ul>
                <a className="mx-auto bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" href="./products/">Read More</a>
            </div>
        </div>
    );
};

export default HotSale;