import React, { Component, useState } from "react";

const Header = (props) => {

    const [smNav, setSmNav] = useState('hidden');

    const toggleSmNav = e => {
        setSmNav((smNav === '' ? 'hidden' : ''));
    };

    let nav_list = [
        { key: '首頁', url: '/', icon: 'mdi-home-circle-outline' },
        { key: '產品介紹', url: '/products', icon: 'mdi-usb-flash-drive-outline' },
        { key: '關於我們', url: '/about', icon: 'mdi-account-box-outline' },
        { key: '聯絡我們', url: '/contact', icon: 'mdi-email-open-outline' },
    ];
    const navList = nav_list.map((obj, index) => {
        return (
            <li key={index} className="lg:flex lg:justify-between lg:items-center">
                <span className={`hidden lg:block mdi ${obj.icon} mr-1`}></span>
                <a
                    href={obj.url}
                    className=" bg-slate-100 lg:bg-transparent text-center block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                ><span className={`lg:hidden lg:block mdi ${obj.icon} mr-1`}></span>{obj.key}</a>
            </li>
        )
    });

    return (
        <header className="relative">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src="/static/img/omo_logo_black.png" className="mr-3 h-6 lg:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> 客製工坊</span>
                    </a>
                    <span className="mdi mdi-menu text-3xl lg:hidden cursor-pointer" onClick={toggleSmNav}></span>
                    <div className={`${smNav} lg:hidden absolute right-0 top-0 z-10 w-full h-screen bg-neutral-400 opacity-50`}></div>
                    <ul className={`${smNav} lg:hidden absolute right-0 top-0 z-10 w-full`}>
                        {navList}
                        <li className="text-center text-xl cursor-pointer hover:bg-gray-50 bg-slate-100" onClick={toggleSmNav}><span className="mdi mdi-close-circle-outline"></span></li>
                    </ul>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            {navList}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>


    );
};

export default Header;