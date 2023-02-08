import React, { Component, useState } from "react";
import Cards from './Cards';

const Products = (props) => {

    const rotation_list = [
        { title: '旋轉碟 - 雷射雕刻', mini: 1, img: '/static/img/products/products01.jpg' },
        { title: '旋轉碟 - 網版印刷', mini: 100, img: '/static/img/products/products01-03.jpg' },
    ];

    const aluminum_list = [
        { title: '鋁管碟 - 雷射雕刻', mini: 1, img: '/static/img/products/products02.jpg' },
    ];

    const mini_list = [
        { title: '迷你碟 - 雷射雕刻', mini: 100, img: '/static/img/products/products03.jpg' },
    ];

    const [products_list, setProductsList] = useState(rotation_list);

    const products_menu = [
        { title: '旋轉碟', list: rotation_list },
        { title: '鋁管碟', list: aluminum_list },
        { title: '迷你碟', list: mini_list },
    ];

    const productsMenu = products_menu.map((obj, index) => {
        return (
            <h4 className="block font-medium text-gray-500 dark:text-gray-300 cursor-pointer" key={index} onClick={() => setProductsList(obj.list)}>{obj.title}</h4>
        )
    });

    return (
        <div className="mx-auto w-8/12 mt-5">
            <div className="container px-6 py-8 mx-auto">
                <div className="lg:flex lg:-mx-2">
                    <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                        {productsMenu}
                    </div>

                    <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                        <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                            <p className="text-gray-500 dark:text-gray-300">{products_list.length} Items</p>
                            <div className="flex items-center">
                                <p className="text-gray-500 dark:text-gray-300">Sort</p>
                                <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                    <option value="#">Recommended</option>
                                    <option value="#">Size</option>
                                    <option value="#">Price</option>
                                </select>
                            </div>
                        </div>

                        <Cards products_list={products_list} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;