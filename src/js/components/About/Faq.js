import React, { Component } from "react";

const Faq = (props) => {
    let question_list = [
        { index: 0, title: '保固多久?', content: '非人為因素，一年內免費換新!', icon:"mdi-arrow-right-bold" },
    ];
    const questionList = question_list.map((obj) => {
        return (
            <div className="flex space-x-8 mt-8" key={obj.index}>
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
            <div className="bg-white p-4 rounded-lg shadow py-8 mt-12">
                <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">Q&A</h4>
                <p className="text-center text-gray-600 text-sm mt-2">下方為常見問題</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-12 px-2 xl:px-12 mt-4">
                    {questionList}
                </div>
            </div>
        </div>
    );
};

export default Faq;