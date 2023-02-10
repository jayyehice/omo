import React, { Component, useState } from "react";
import Cards from './Cards';

const Products = (props) => {

    const all_products_list = {
        rotation: [
            { title: '旋轉碟 - 雷射雕刻', mini: 1, type: 'laser', img: '/static/img/products/products01.jpg' },
            { title: '旋轉碟 - 網版印刷', mini: 100, type: 'screen_print', img: '/static/img/products/products01-03.jpg' },
        ],
        aluminum: [
            { title: '鋁管碟 - 雷射雕刻', mini: 1, type: 'laser', img: '/static/img/products/products02.jpg' },
        ],
        mini: [
            { title: '迷你碟 - 雷射雕刻', mini: 100, type: 'laser', img: '/static/img/products/products03.jpg' },
        ]
    };

    const products_menu = [
        { title: '旋轉碟', product: 'rotation' },
        { title: '鋁管碟', product: 'aluminum' },
        { title: '迷你碟', product: 'mini' },
    ];

    const type_list = [
        { title: '全部', type: 'all' },
        { title: '雷射雕刻', type: 'laser' },
        { title: '網版印刷', type: 'screen_print' },
    ];


    const [products_list, setProductsList] = useState(all_products_list.rotation);
    const [products_type, setProductsType] = useState(type_list[0].type);
    const [choose_product, setChooseProduct] = useState('rotation');


    const chooseProductClick = e => {
        let product = e.target.dataset.product;
        setProductsList(all_products_list[product].filter(obj => (products_type === 'all' || products_type === obj.type)));
        setChooseProduct(product);
    };

    const sortTypeChange = e => {
        setProductsType(e.target.value);
        setProductsList(all_products_list[choose_product].filter(obj => (e.target.value === 'all' || e.target.value === obj.type)))
    };


    const productsMenu = products_menu.map((obj, index) => {
        return (
            <h4
                className="block font-medium text-gray-500 dark:text-gray-300 cursor-pointer"
                key={index}
                data-product={obj.product}
                onClick={chooseProductClick}>
                {obj.title}
            </h4>
        )
    });

    const sortType = type_list.map((obj, index) => {
        return (
            <option key={index} value={obj.type}>{obj.title}</option>
        )
    });

    return (
        <div className="mx-auto w-8/12 mt-5 mb-20">
            <div className="container px-6 py-8 mx-auto">
                <div className="lg:flex lg:-mx-2">
                    <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                        {productsMenu}
                    </div>

                    <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5">
                        <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                            <p className="text-gray-500 dark:text-gray-300">{products_list.length} Items</p>
                            <div className="flex items-center">
                                <p className="text-gray-500 dark:text-gray-300">加工方式</p>
                                <select className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none" onChange={sortTypeChange}>
                                    {sortType}
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