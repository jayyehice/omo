import React, { Component } from "react";

const News = (props) => {
    let news_list = [
        { content: '[新品上市]  客製化小夜燈-開始販售', date: '2023.03.01' },
        { content: '[促銷活動] 64GB 隨身碟買五送一', date: '2023.02.10' },
    ];

    const newsList = news_list.map((obj, index) => {
        return (
            <tr key={index}>
                <td className="w-1/3 text-left py-3 px-4">{obj.content}</td>
                <td className="w-1/3 text-left py-3 px-4">{obj.date}</td>
            </tr>
        )
    });
    return (
        <div className="bg-blue-50 py-5">
            <section className="mx-auto w-10/12 pt-6">
                <h2 className="w-full text-4xl font-bold text-center"><span className="mdi mdi-information text-blue-600"></span>最新消息</h2>

                <div className="md:px-32 py-8 w-full">
                    <div className="shadow overflow-hidden rounded border-b border-gray-200">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">標題</th>
                                    <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">日期</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {newsList}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;