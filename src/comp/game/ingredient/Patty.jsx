import React, { useState } from 'react';
import styled from 'styled-components';
import patty from '../../../assets/img/patty.png';

const Patty = () => {
    const handleClick = () => {
        console.log("Patty Click");
    };
    return (
        <Back onClick={handleClick}>
        </Back>
    );
};

export default Patty;

const Back = styled.div`
    width : 100px;
    height : 100px;
    background : url(${patty});
    background-size: cover;
    cursor: pointer;
`;
