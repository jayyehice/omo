import React, { Component } from "react";
import Slider from "react-slick";
import ShopLink from '../Common/ShopLink';
import HotSale from './HotSale';

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
        <div className="mx-auto w-8/12 mt-5">
            <Slider {...settings} className="mx-auto w-9/12 my-10 shadow-md">
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

            <hr />



            <section class="banner1">
                <div class="wrapper">
                    <img src="/static/img/banner/banner01-1.jpg" alt="" />
                    <img src="/static/img/banner/banner01-2.png" alt="" />
                    <div>
                        <h3>客製禮品</h3>
                        <h3>為您專屬打造</h3>

                    </div>
                </div>
            </section>

            <HotSale />

            <section class="banner2">
                <div class="wrapper">
                    <h3>排版、製作成品</h3>
                    <h3>一次到位&nbsp;&nbsp;</h3>

                </div>
            </section>


            <section class="news">
                <div class="wrapper">
                    <div class="subtitle">
                        <h2>最新消息</h2>
                    </div>

                    <div class="news_table">
                        <table>
                            <thead>
                                <tr>
                                    <td>標題</td>
                                    <td>日期</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>[新品上市]  客製化小夜燈-開始販售</td>
                                    <td>2022.03.24</td>
                                </tr>
                                <tr>
                                    <td>[促銷活動] 64GB 隨身碟買五送一 </td>
                                    <td>2022.03.17</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </section>

            <ShopLink />

        </div>
    );
};

export default Home;