import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../../assets/img/storebackground.png';


const Outro = () => {
   

    return (
        <div>
            <Back>
                <h1>아</h1>
            </Back>
        </div>
    );
};

export default Outro;

const Back = styled.div`
    display : flex;
    width : 1280px;
    height : 720px;
    background : url(${background});
    background-size: cover;
`;
