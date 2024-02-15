import React from 'react';
import styled from 'styled-components';
import loginback from '../../assets/img/loginback.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Back>
            <Title>버거버벅버거</Title>
        <RegisterBox>
            <LoginLink to='/login'>로그인</LoginLink>
            <RegisterLink to='/register'>회원가입</RegisterLink>
        </RegisterBox>
        </Back>
    );
};

export default Home;

const Back = styled.div`   
    display : flex;
    justify-content : center;
    align-items: center; 
    flex-direction: column;
    background : url(${loginback});
    background-size : cover;
    width : 100%;
    height : 100%;
`;

const Title = styled.div`
    width : 800px;
    height : 300px;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color : #FFEF9B;
    border-radius : 30px;
    padding : 20px;
    font-size : 100px;
    color : #232323;
`;

const RegisterBox = styled.form`
    display : flex;
    justify-content : space-evenly;
    align-items: center;
    flex-direction: column;
    width : 400px;
    height : 260px;
    margin-top : 30px;
    border-radius : 30px;
    background-color : #FFEF9B;
`;



const StyledLink = styled(Link)`
    width : 200px;
    hegiht : 300px;
    text-align : center;
    border-radius : 30px;
    border : none;
    padding : 20px;
    background-color : #FFD90F;
    font-size:25px;
    text-decoration : none;
    font-weight : 700;
    color : #232323;
    box-shadow: 0px 5px 0px 0px #A66615;

    &:hover{
        margin-top: 15px;
        margin-bottom : 5px;
        box-shadow: 0px 0px 0px 0px #A66615;
	}

`;

const LoginLink = styled(StyledLink)``;
const RegisterLink = styled(StyledLink)``;