import React, { Component } from "react";

const ShopLink = (props) => {

    let shop_list = [
        { img: 'shop_01.jpg', link: 'https://shopee.tw/jayyehice?categoryId=100644&itemId=1814827105' },
        { img: 'shop_02.jpg', link: 'https://www.ruten.com.tw/store/jayyehice/' },
        { img: 'shop_03.jpg', link: 'https://tw.bid.yahoo.com/booth/Y0599751710' },
    ];

    const shopList = shop_list.map((obj, index) => {
        return (
            <li className="w-1/3">
                <a href={obj.link} target="shop">
                    <div>
                        <img className="mx-auto w-1/2 shadow-lg rounded-[20px] opacity-50 hover:opacity-100 ease-linear duration-300" src={`/static/img/shop/${obj.img}`} alt="" />
                    </div>
                </a>
            </li>
        )
    });

    return (

        <section className="mx-auto lg:w-8/12 md:w-10/12 mb-28">
            <h2 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center pt-16 pb-10"><span class="mdi mdi-store text-orange-600"></span>賣場連結</h2>
            <ul className="flex justify-between">
                {shopList}
            </ul>
        </section>

    );
};

export default ShopLink;