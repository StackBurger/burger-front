import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const OrderStack = () => {
    const [orders, setOrders] = useState([]);

    // 주문 배열 생성 함수
    const generateOrders = () => {
        const newOrders = Array.from({ length: 10 }, (_, index) => {
            if (index === 0) return 0; // 첫 번째 항목은 0으로 고정
            if (index === 9) return 7; // 마지막 항목은 7로 고정
            return Math.floor(Math.random() * 6) + 1;
        });
        setOrders(newOrders);
    };

    useEffect(() => {
        generateOrders();
    }, []); // 컴포넌트가 마운트될 때 주문 배열 생성

    return (
        <div>
            <h2>주문 내역</h2>
            <Bill>
                {orders.map((order, index) => (
                    <div key={index}>주문 {index + 1}: {order}</div>
                ))}
            </Bill>
        </div>
    );
};

export default OrderStack;

const Bill = styled.div`
    /* 필요한 스타일링을 여기에 추가하세요 */
`;
