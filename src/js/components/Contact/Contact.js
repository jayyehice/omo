import React, { Component } from "react";

const Contact = (props) => {

    let infomation_list = [
        { title: '地址', content: '台北市信義區吳興街600巷76弄74-2號1樓', icon: "mdi-map-marker" },
        { title: '電話', content: '02-27238815', icon: "mdi-phone" },
        { title: '傳真', content: '02-27238490', icon: "mdi-fax" },
        { title: '上班時間', content: '08:30~17:30(星期一~星期五)', icon: "mdi-briefcase" },
        { title: 'E-mail', content: 'omo.sales@msa.hinet.net', icon: "mdi-email-fast-outline" },
        { title: 'Line', content: '@fjk2994k', icon: "mdi-square-rounded-badge-outline" },
        { title: 'FB', content: 'OMO客製工坊', icon: "mdi-facebook" },
    ];

    const infomationList = infomation_list.map((obj, index) => {
        return (
            <li className="flex" key={index}>
                <span className={`mdi ${obj.icon} mr-3`}></span>
                <p>{obj.title}：{obj.content}</p>
            </li>
        )
    });

    let input_content = [
        { name: '姓', id: 'first-name', autocomplete: 'family-name' },
        { name: '名', id: 'last-name', autocomplete: 'given-name' },
        { name: '電話', id: 'phone', autocomplete: 'tel' },
        { name: 'Email', id: 'email', autocomplete: 'email' },

    ];

    const inputContent = input_content.map((obj, index) => {
        return (
            <div className="col-span-6 sm:col-span-3" key={index}>
                <label htmlFor={obj.id} className="block font-medium text-gray-700">{obj.name}</label>
                <input type="text" name={obj.id} id={obj.id} autoComplete={obj.autocomplete} className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
            </div>
        )
    });

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
        <main className="mt-5">
            <section className="mx-auto lg:w-8/12 md:w-10/12 mb-10">
                <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center py-10">鋐隆精工有限公司</h4>
                <div className="flex justify-between mx-auto lg:w-3/4 md:w-full">
                    <iframe className="grow" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14461.818159366014!2d121.57024!3d25.0186441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6df07ead1fedf392!2z6YuQ6ZqG57K-5bel5pyJ6ZmQ5YWs5Y-4LeawtOWIhuWtkOWKqeeHg-WZqA!5e0!3m2!1szh-TW!2stw!4v1649816529871!5m2!1szh-TW!2stw"></iframe>
                    <ul className="ml-10 grow space-y-3">
                        {infomationList}
                    </ul>
                </div>
            </section>

            <section className="bg-gray-100 pb-20">
                <h2 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center py-10">聯絡我們</h2>
                <div className="mx-auto  mt-5 md:col-span-2 md:mt-0 lg:w-8/12 md:w-10/12" >
                    <form action="#" method="POST">
                        <div className="overflow-hidden shadow sm:rounded-md">
                            <div className="bg-white px-4 py-5 sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    {inputContent}
                                    <div className="col-span-12 sm:col-span-6">
                                        <label htmlFor="message" className="block font-medium text-gray-700 mb-2">留言內容</label>
                                        <textarea className="w-full shadow p-2" name="message" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                <button type="button" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">送出</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>

            <section className="mx-auto lg:w-8/12 md:w-10/12 mb-28">
                <h2 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center pt-16 pb-10">賣場連結</h2>
                <ul className="flex justify-between">
                    {shopList}
                </ul>
            </section>

        </main>
    );
};

export default Contact;