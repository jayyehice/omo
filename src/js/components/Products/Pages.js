import React, { Component, useState } from "react";
import Cards from './Cards';

const Products = (props) => {
    return (
        <main className="mx-auto w-8/12 mt-5 mb-20">

            <div className="flex items-start justify-between">
                <section className="w-10/12 border p-5">
                    <h2 className="text-4xl mb-5">商品介紹</h2>
                    <div className="flex items-start justify-between">
                        <ul className="w-8/12">
                            <li className="flex items-start justify-between">
                                <p>顏色</p>
                                <div id="color_box">

                                </div>
                            </li>
                            <li className="flex items-start justify-between">
                                <p>底殼</p>
                                <div id="shell_color_box">
                                    <p className="color_btn" id="_white">白</p>
                                    <p className="color_btn unchoose" id="_black">黑</p>
                                </div>
                            </li>
                            <li className="flex items-start justify-between">
                                <p>尺寸</p>
                                <p id="intro_size_button"></p>
                                <span id="switch">
                                    <span id="switch_open">開啟</span>
                                    <span id="switch_close">關閉</span>
                                    <span id="switch_circle"></span>
                                </span>
                                <span className="switch">
                                    <span id="switch_open_size" className="switch_open">開啟</span>
                                    <span id="switch_close_size" className="switch_close">關閉</span>
                                    <span id="switch_circle_size" className="switch_circle"></span>
                                </span>
                            </li>
                            <li className="flex items-start justify-between">
                                <p>雕刻範圍</p>
                                <p id="intro_print_range_button"></p>
                                <span className="switch">
                                    <span className="switch_open">開啟</span>
                                    <span className="switch_close">關閉</span>
                                    <span className="switch_circle"></span>
                                </span>
                            </li>
                            <li className="flex items-start justify-between">
                                <p>適用包裝</p>
                                <a href="#">蘋果派盒</a>
                                <a href="#">馬口鐵盒</a>
                                <a href="#">PP盒</a>
                            </li>
                            <li className="flex items-start justify-between">
                                <p>印製方式</p>
                                <a href="#">雷射雕刻</a>
                                <a href="#">網版印刷</a>
                                <a href="#">UV直噴</a>
                            </li>
                            <li className="flex items-start justify-between">
                                <p>最低客製數</p>
                                <p>1 pcs</p>
                            </li>
                            <li className="flex items-start justify-between">
                                <p>購買連結</p>
                                <a href="https://shopee.tw/jayyehice?categoryId=100644&itemId=1814827105" target="shop">蝦皮</a>
                                <a href="https://tw.bid.yahoo.com/booth/Y0599751710" target="shop">Yahoo</a>
                                <a href="https://www.ruten.com.tw/store/jayyehice/" target="shop">露天</a>
                            </li>
                        </ul>

                        <div className="w-4/12">
                            <img id="intro_img" src="" alt="" />
                            <img id="intro_size" src="" alt="" />
                            <img id="intro_print_range" src="" alt="" />
                        </div>
                    </div>
                </section>

                <section className="w-2/12 border p-5">
                    <aside className="text-center">
                        <h4 className="text-2xl">產品分類</h4>
                        <ul>
                            <li><a href="./pages.html?pages=1" className="text-slate-400">旋轉碟</a></li>
                            <li><a href="./pages.html?pages=2">鋁管碟</a></li>
                            <li><a href="./pages.html?pages=3">迷你碟</a></li>
                        </ul>
                    </aside>
                </section>
            </div>



            <section className="mt-5">
                <h2 className="text-4xl mb-5">你可能會喜歡</h2>
                <div className="flex items-start justify-start">
                    <a className="w-3/12 border mr-5 rounded-[12px] overflow-hidden" href="./pages.html?pages=2"><img src="/static/img/products/products02.jpg" alt="" /></a>
                    <a className="w-3/12 border mr-5 rounded-[12px] overflow-hidden" href="./pages.html?pages=3"><img src="/static/img/products/products03.jpg" alt="" /></a>
                </div>
            </section>
        </main>
    );
};

export default Products;