import React from 'react';
import styled from 'styled-components';
import loginback from '../../assets/img/loginback.png';
import { Link } from 'react-router-dom';


const Home = () => {
    const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;

    const code = new URL(window.location.href).searchParams.get("code");
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return (
        <Back>
            <Title>머거버거</Title>
            <RegisterBox>
            <LoginLink onClick={handleLogin}>카카오 로그인</LoginLink>
            <RegisterLink>로그인</RegisterLink>
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
    letter-spacing:-15px;
    font-family:'hsu';
    font-size : 200px;
    font-weight: 900;
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
    position : absolute;
    text-align : center;
    border-radius : 30px;
    padding : 20px;
    background-color : #FFD90F;
    font-size:25px;
    text-decoration : none;
    font-family:'chab';
    font-weight : 700;
    color : #232323;
    box-shadow: 0px 5px 0px 0px #A66615;

    &:hover{
        margin-top: 10px;
        box-shadow: 0px 0px 0px 0px #A66615;
	}

`;

const LoginLink = styled(StyledLink)`
    width : 200px;
    hegiht : 300px;
    top: 62%;
`;
const RegisterLink = styled(StyledLink)`
    width : 200px;
    hegiht : 300px;
    top: 75%;
`;