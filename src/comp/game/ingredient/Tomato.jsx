import React, { useState } from 'react';
import styled from 'styled-components';
import tomato from '../../../assets/img/tomato.png';

const Tomato = () => {
    const handleClick = () => {
        console.log("Tomato Click");
    };

    return (
        <Back onClick={handleClick}>
        </Back>
    );
};

export default Tomato;

const Back = styled.div`
    left: 100px;
    width : 100px;
    height : 100px;
    background : url(${tomato});
    background-size: cover;
    cursor: pointer;
`;
