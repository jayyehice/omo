import React, { Component } from "react";

const Cards = (props) => {

    const productsList = props.products_list.map((obj, index) => {
        return (
            <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto shadow overflow-hidden" key={index}>
                <img className="object-contain w-full rounded-md h-72 xl:h-60 hover:scale-105 transition ease-in duration-200" src={obj.img} alt="" />
                <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{obj.title}</h4>
                <p className="text-blue-500">最少訂購量：{obj.mini} Pcs</p>

                <button className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <span className="mx-1">聯絡我們</span>
                </button>
            </div>
        )
    });

    return (
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 cursor-pointer">
            {productsList}
        </div>
    );
};

export default Cards;