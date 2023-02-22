import React, { Component, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Products = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get("product");

    const page_products = [
        {
            name: '旋轉碟',
            up_pic: ['/static/img/products/page01.jpg', '/static/img/products/page02.jpg', '/static/img/products/page03.jpg', '/static/img/products/page04.jpg'],
            down_pic: ['/static/img/products/usb/red_white.jpg', '/static/img/products/usb/intro_size.png', '/static/img/products/usb/intro_print_range.png'],
            color: [
                ['bg-red-600', '紅', 'red'], ['bg-orange-600', '橘', 'orange'], ['bg-yellow-300', '黃', 'yellow'],
                ['bg-teal-400', '綠', 'green'], ['bg-blue-600', '藍', 'blue'], ['bg-pink-600', '粉', 'pink'],
                ['bg-purple-600', '紫', 'purple'], ['bg-black', '黑', 'black'], ['bg-stone-200', '銀', 'silver']
            ],
            shell_color: [['border border-black', '白', '_white'], ['bg-black', '黑', '_black']],
            size_text: ['58 x 19 x 10 mm', '24 x 14 mm'],
            mini_quantity: 1,
            type: 'usb',
        },
        {
            name: '鋁管碟',
            up_pic: ['/static/img/products/products02.jpg', '', '', ''],
            down_pic: ['/static/img/products/al/black.jpg', '/static/img/products/al/intro_size.png', '/static/img/products/al/intro_print_range.png'],
            color: [['bg-black', '黑', 'black'], ['bg-stone-200', '銀', 'silver'], ['bg-purple-600', '紫', 'purple'], ['bg-red-600', '紅', 'red']],
            shell_color: [['', '無', '']],
            size_text: ['60 x 17 x 7.5 mm', '35 x 12 mm'],
            mini_quantity: 100,
            type: 'al',
        },
        {
            name: '迷你碟',
            up_pic: ['/static/img/products/products03.jpg', '', '', ''],
            down_pic: ['/static/img/products/mini/black.jpg', '/static/img/products/mini/intro_size.png', '/static/img/products/mini/intro_print_range.png'],
            color: [['bg-black', '黑', 'black']],
            shell_color: [['', '無', '']],
            size_text: ['34.5 x 12 x 4.5 mm', '10 x 28 mm'],
            mini_quantity: 100,
            type: 'mini',
        },
    ];

    const [show_img, setShowImg] = useState(page_products[id].up_pic[0]);

    const switchImg = e => setShowImg(e.target.src);

    const smallImg = page_products[id].up_pic.map((img, index) => {
        return (
            <img className="w-3/12 p-1 opacity-25 hover:opacity-100 cursor-pointer" src={img} alt="" onClick={switchImg} key={index} />
        )
    });

    const productMenu = page_products.map((obj, index) => {
        return (
            <li key={index} className="mt-2">
                <a href={`./?product=${index}`} className={(id != index) ? "text-slate-400" : ""}>{obj.name}</a>
            </li>
        )
    });


    
    const [intro_img, setIntroImg] = useState(page_products[id].down_pic[0]);
    const [color, setColor] = useState(page_products[id].color[0][2]);
    const [shell_color, setShellColor] = useState(page_products[id].shell_color[0][2]);

    const changeIntroColor = e => {
        setColor(e.target.dataset.color);
        setIntroImg(`/static/img/products/${page_products[id].type}/${e.target.dataset.color}${shell_color}.jpg`);
    };

    const changeIntroShellColor = e => {
        setShellColor(e.target.dataset.color);
        setIntroImg(`/static/img/products/${page_products[id].type}/${color}${e.target.dataset.color}.jpg`);
    };

    const colorButton = page_products[id].color.map((color, index) => {
        return (
            <li className="mr-3 flex items-center justify-center" key={index}>
                <div className={`${color[0]} rounded-full w-4 h-4 cursor-pointer`} data-color={color[2]} onClick={changeIntroColor}></div>
                <div className="ml-1">{color[1]}</div>
            </li>
        )
    });

    const shellButton = page_products[id].shell_color.map((color, index) => {
        return (
            <li className="mr-3 flex items-center justify-center" key={index}>
                <div className={`${color[0]} rounded-full w-4 h-4 cursor-pointer`} data-color={color[2]} onClick={changeIntroShellColor}></div>
                <div className="ml-1">{color[1]}</div>
            </li>
        )
    });





    const [size_opacity, setSizeOpacity] = useState('opacity-0');
    const [print_size_opacity, setPrintSizeOpacity] = useState('opacity-0');

    const sizeSwitch = e => setSizeOpacity(e.target.checked ? 'opacity-100' : 'opacity-0');
    const printSizeSwitch = e => setPrintSizeOpacity(e.target.checked ? 'opacity-100' : 'opacity-0');

    const introImg = page_products[id].down_pic.map((img, index) => {
        return (
            <img className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 ease-in duration-300 ${(index === 1) ? size_opacity : ''} ${(index === 2) ? print_size_opacity : ''}` } src={(index === 0)?intro_img:img} alt="" key={index} />
        )
    });


    const mayLike = page_products.map((obj, index) => {
        return (
            <a className={`w-3/12 ml-5 border rounded-[12px] overflow-hidden flex items-center justify-center ${(id == index)?'hidden':''}`} href={`./?product=${index}`} key={index}><img src={obj.up_pic[0]} alt="" /></a>
        )
    });

    return (
        <main className="mx-auto w-8/12 mt-5 mb-20">
            <div className="flex items-start justify-between">
                <section className="p-5 w-10/12">
                    <h2 className="text-4xl py-5">{page_products[id].name}</h2>
                    <div className="flex items-center justify-center">
                        <div className="w-8/12 p-3 border-b-2 flex items-center justify-between flex-wrap">
                            <img className="w-full p-1 mb-3 border drop-shadow-md" src={show_img} alt="" />
                            {smallImg}
                        </div>
                    </div>
                    <div className="my-10">
                        <h2 className="text-4xl mb-10">商品介紹</h2>
                        <div className="flex items-center justify-center">
                            <div className="flex justify-between w-8/12">
                                <ul className="w-6/12">
                                    <li className="flex items-start justify-between mb-4">
                                        <p className="w-3/12">顏色</p>
                                        <ul className="flex items-center justify-start flex-wrap w-9/12">
                                            {colorButton}
                                        </ul>
                                    </li>
                                    <li className="flex items-start justify-between mb-4">
                                        <p className="w-3/12">底殼</p>
                                        <ul className="flex items-center justify-start flex-wrap w-9/12">
                                            {shellButton}
                                        </ul>
                                    </li>
                                    <li className="flex items-start justify-between mb-4">
                                        <p className="w-3/12">尺寸</p>
                                        <div className="flex items-center justify-start w-9/12">
                                            <p>關閉</p>
                                            <input
                                                type="checkbox"
                                                onClick={sizeSwitch}
                                                className="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5 cursor-pointer mx-3"
                                            />
                                            <p>開啟</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start justify-between mb-4">
                                        <p className="w-3/12">雕刻範圍</p>
                                        <div className="flex items-center justify-start w-9/12">
                                            <p>關閉</p>
                                            <input
                                                type="checkbox"
                                                onClick={printSizeSwitch}
                                                className="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5 cursor-pointer mx-3"
                                            />
                                            <p>開啟</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start justify-between mb-4">
                                        <p className="w-3/12">適用包裝</p>
                                        <div className="flex items-center justify-start w-9/12">
                                            <a className="mr-3" href="#">蘋果派盒</a>
                                            <a className="mr-3" href="#">馬口鐵盒</a>
                                            <a className="mr-3" href="#">PP盒</a>
                                        </div>
                                    </li>
                                    <li className="flex items-start justify-between mb-4">
                                        <p className="w-3/12">印製方式</p>
                                        <div className="flex items-center justify-start w-9/12">
                                            <a className="mr-3" href="#">雷射雕刻</a>
                                            <a className="mr-3" href="#">網版印刷</a>
                                            <a className="mr-3" href="#">UV直噴</a>
                                        </div>
                                    </li>
                                    <li className="flex items-start justify-between mb-4">
                                        <p className="w-3/12">最低客製數</p>
                                        <div className="flex items-center justify-start w-9/12">
                                            <p>{page_products[id].mini_quantity} pcs</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start justify-between mb-4">
                                        <p className="w-3/12">購買連結</p>
                                        <div className="flex items-center justify-start w-9/12">
                                            <a className="mr-3" href="https://shopee.tw/jayyehice?categoryId=100644&itemId=1814827105" target="shop">蝦皮</a>
                                            <a className="mr-3" href="https://tw.bid.yahoo.com/booth/Y0599751710" target="shop">Yahoo</a>
                                            <a className="mr-3" href="https://www.ruten.com.tw/store/jayyehice/" target="shop">露天</a>
                                        </div>
                                    </li>
                                </ul>

                                <div className="w-5/12 border relative border">
                                    {introImg}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-2/12 p-5 mt-20">
                    <aside className="text-center">
                        <h4 className="text-2xl border-l-4 border-black mb-5">產品分類</h4>
                        <ul>
                            {productMenu}
                        </ul>
                    </aside>
                </section>
            </div>

            <section className="mt-5 p-5 w-10/12">
                <h2 className="text-4xl mb-5">你可能會喜歡</h2>
                <div className="flex items-center justify-center">
                    <div className="flex justify-start">
                        {mayLike}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Products;