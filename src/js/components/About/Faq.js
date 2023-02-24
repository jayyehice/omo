import React, { Component } from "react";

const Faq = (props) => {
    let question_list = [
        { title: '營業時間', content: '週一到週五，09:00 ~ 17:00', icon:"mdi-store-clock-outline" },
        { title: '隨身碟保固', content: '非人為因素，一年內免費換新!', icon:"mdi-usb-flash-drive" },
        { title: '雕刻顏色', content: '雷射雕刻是將金屬表層的電鍍刻掉，所以僅會呈現白色。有顏色的圖檔無法雕刻!', icon:"mdi-palette" },
        { title: '檔案類型', content: 'AI、CDR、PSD或高解析度的圖檔皆可!', icon:"mdi-file-arrow-up-down-outline" },
        { title: '製作時間', content: '確認圖檔後，大約5個工作天內製作完成!', icon:"mdi-check-network" },
        { title: '運送時間', content: '超商:3~5天。 郵局:最快隔天，最慢下週三前!', icon:"mdi-truck-delivery-outline" },
    ];
    const questionList = question_list.map((obj, index) => {
        return (
            <div className="flex space-x-8 mt-8" key={index}>
                <div>
                    <span className={`mdi ${obj.icon} text-5xl text-blue-600`}></span>
                </div>
                <div>
                    <h4 className="text-xl font-bold text-gray-700">{obj.title}</h4>
                    <p className="text-gray-600 my-2">{obj.content}</p>
                </div>
            </div>
        )
    });
    return (
        <div>
            <div className="bg-white p-4 rounded-lg shadow py-8 my-12">
                <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">Q&A</h4>
                <p className="text-center text-gray-600 text-sm mt-2">常見問題</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
                    {questionList}
                </div>
            </div>
        </div>
    );
};

export default Faq;