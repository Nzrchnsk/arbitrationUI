import React from 'react';

import './p2p-current-course-table-item.css';

const P2PCurrentCourseTableItem = ({p2pCurrentCourseId, p2pCurrentCourse}) => {
    const {
        wholesalePrice,
        retailPrice,
        coin,
        fiat,
        payType,
        exchange,

    } = p2pCurrentCourse;

    const coins = ['BTC', 'ETH', 'USDT'];
    const fiats = ['RUB', 'USD'];
    const exchanges = ['Binance'];
    const payTypes = [
        'RosBank',
        'Tinkoff',
        // RaiffeisenBankRussia,
        'QIWI',
        'YandexMoney',
        // PostBankRussia,
        // ABank,
        // HomeCreditBank,
        // MTSBank,
        // Payeer,
        'Advcash',
        // AlfaBank,
        // Sberbank,
        // VTBBank,;
    ]
    
    

    return (
        <tr>
            <td>{p2pCurrentCourseId}</td>
            <td className="p2p-current-course-wholesalePrice">{wholesalePrice}</td>
            <td className="p2p-current-course-retailPrice">{retailPrice}</td>
            <td className="p2p-current-course-coin">{coins[coin]}</td>
            <td className="p2p-current-course-fiat">{fiats[fiat]}</td>
            <td className="p2p-current-course-payType">{payTypes[payType]}</td>
            <td className="p2p-current-course-exchange">{exchanges[exchange]}</td>
        </tr>
    );
    
};


export default P2PCurrentCourseTableItem;