import React, { Component } from "react";

const OMOIntroduction = (props) => {
    let infomation_list = [
        { index: 0, title: '公司名稱', content: '鋐隆精工有限公司' },
        { index: 1, title: '統一編號', content: '80293680' },
        { index: 2, title: '設立日期', content: '91年11月11日' },
        { index: 3, title: '登記地址', content: '臺北市信義區景聯里基隆路二段２３號８樓之５' },
        { index: 4, title: '資本額(元)', content: '500,000' },
        { index: 5, title: '登記營業項目', content: '電子器材、電子設備批發(464211)' },
    ];
    const infomationList = infomation_list.map((obj) => {
        return (
            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0" key={obj.index}>
                <td className="border-grey-light border hover:bg-gray-100 p-3">{obj.title}</td>
                <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">{obj.content}</td>
            </tr>
        )
    });
    return (
        <div className="bg-white p-4 rounded-lg shadow py-8 mt-12">

            <section>
                <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">關於OMO</h4>

                <div className="mt-8 px-12">
                    <div>
                        <p>
                            自有品牌 OMO 鋐隆精工有限公司成立於 1988 年 4 月，是一家專業的連接器供應商。為了擴大市場規模，3C 產品已在 2005 年生產上市，包括隨身碟、藍牙和多媒體等產品。該公司由葉益謙先生成立，總部設在台灣台北市，經營管理團隊由擁有超過 20 年經驗的專業人士組成。
                            鋐隆精工有限公司組織了一個獨特及創新的研發團隊，在市場上提供高品質的 USB 連接器系列產品，為了滿足客戶的各種需求，更致力創造更加優越的產品。此外，我們能幫助客戶創造出有競爭力的價格和市場的發展，願意與客戶和​​合作夥伴 分享相關的市場信息及策略，以達到雙贏的局面。
                        </p>
                    </div>
                    <div className="mt-4">
                        <p>
                            Omo Co., Ltd. established in February 1988, is a professional connector provider. To expand the market scale, the 3C products have been released in 2005. The 3C applications products are Flash peripherals, Blue Tooth and multimedia products. The company was founded byMr. Clark Yeh and headquartered in Taipei City , Taiwan . Management team is formed with senior professionals who have more than 20 years field experiences.
                            With a distinctive and innovative R&D team, Omo offers the high quality USB and connector series products in the market. In order to meet various needs from customers, Omo is committed creating more superior products in our product lines. Also, Omo is willing to help customers to have competitive in price and market development. To gain the win-win-win business, Omo will like to share all market information and strategies with customers and partners.
                        </p>
                    </div>

                    <div className="mt-8 container flex">
                        <table className="w-3/5 flex flex-no-wrap sm:bg-white rounded-lg overflow-hidden my-5 justify-center">
                            <tbody className="flex-1 sm:flex-none p-2">
                                {infomationList}
                            </tbody>
                        </table>
                        <div className="w-2/5 flex items-center">
                            <img src="/static/img/usb/real_ref01_big.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OMOIntroduction;