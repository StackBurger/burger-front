import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/img/playbackground.png';
import IngredientStack from './IngredientStack';
import OrderStack from './OrderStack';
import bell from '../../assets/img/bell.png';

const GamePage = () => {
    return (
        <div>
            <Back>
                <IngredientStack/>    
                <OrderStack/>
                <Bell/> 
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

const Bell = styled.div`
    position : absolute;
    top: 55px;
    left: 545px;
    width : 90px;
    height : 90px;
    background : url(${bell});  
    background-size: cover;
`;