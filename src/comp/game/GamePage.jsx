import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/img/playbackground.png';
import Patty from './ingredient/Patty';
import Tomato from './ingredient/Tomato';

const GamePage = () => {
    return (
        <div>
            <Back>
                <Desk>
                    <Patty />
                    <Tomato />
                </Desk>
            </Back>
        </div>
    );
};

export default GamePage;

const Back = styled.div`
    display : flex;
    justify-content: space-between;
    align-items: center;
    width : 1280px;
    height : 720px;
    background : url(${background});
    background-size: cover;
`;

const Desk = styled.div`
    position: absolute; /* 절대 위치 */
    left: 100px;
    bottom: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4개의 열 */
    grid-template-rows: repeat(2, 1fr); /* 2개의 행 */
    gap: 100px; /* 셀 사이의 간격 조절 */
    justify-content: center; /* 수평 중앙 정렬 */
    align-items: center; /* 수직 중앙 정렬 */
`;