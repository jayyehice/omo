import React, { Component } from "react";

const Footer = (props) => {
    let contact_list = [
        { title: 'BSMI認證', content: 'D3B371' },
        { title: 'E-mail', content: 'omo.sales@msa.hinet.net' },
        { title: '保固', content: '非人為因素保固一年' },
        { title: '電話', content: '02-27238815' },
        { title: '傳真', content: '02-27238490' },
        { title: '地址', content: '110 台北市信義區吳興街600巷76弄74-2號1樓' },
    ];

    const contactList = contact_list.map((obj, index) => {
        return (
            <li key={index} className="mr-2">{obj.title}：{obj.content}</li>
        )
    });

    return (
        <footer className="bg-black text-white px-4 lg:px-6 py-8">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl">
                <a href="/" className="w-1/6 block"><img src="/static/img/omo_logo_white.png" alt="" /></a>
                <ul className="flex flex-wrap items-center justify-between selection:bg-fuchsia-300 grow mx-36">
                    {contactList}
                </ul>

                <div className="flex items-center justify-center">
                    <a href="https://line.me/ti/p/%40fjk2994k" target="_blank" className="mr-3 hover:bg-green-500 rounded-[16px]">
                        <img src="/static/img/icon/line_icon.png" alt="" />
                    </a>

                    <a href="https://www.facebook.com/omoshop" target="_blank" className="hover:bg-blue-500 rounded-lg">
                        <img src="/static/img/icon/FB_icon.png" alt="" />
                    </a>
                </div>

            </div>

        </footer>
    );
};

export default Footer;