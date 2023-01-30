import React, { Component } from "react";

const Faq = (props) => {
    let question_list = [
        { index: 0, title: '保固多久?', content: '非人為因素，一年內免費換新!' },
    ];
    const questionList = question_list.map((obj) => {
        return (
            <div className="flex space-x-8 mt-8" key={obj.index}>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
                    </svg>
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