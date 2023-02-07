import React, { Component } from "react";

const News = (props) => {
    return (
        <div className="bg-blue-50 py-5">
            <section className="mx-auto w-10/12">
                <div className="flex items-center justify-center">
                    <div className="subtitle">
                        <h2>最新消息</h2>
                    </div>

                    <div className="news_table">
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
        </div>
    );
};

export default News;