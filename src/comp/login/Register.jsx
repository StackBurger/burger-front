import React from 'react';
import styled from 'styled-components';
import loginback from '../../assets/img/loginback.png';

const Register = () => {
    return (
        <Back>
        <RegisterBox>
            <NicknameBox type='text' placeholder='닉네임'/>
            <EmailBox type='email' placeholder='이메일'/>
            <PwBox type='password' placeholder='P/W'/>
            <RegisterButton>회원가입</RegisterButton>
        </RegisterBox>
        </Back>
    );
};

export default Register;

const Back = styled.div`   
    display : flex;
    justify-content : center;
    align-items: center; 
    background : url(${loginback});
    background-size : cover;
    width : 100%;
    height : 100%;
`;

const RegisterBox = styled.form`
    display : flex;
    width : 500px;
    height : 500px;
    border-radius : 30px;
    justify-content : center;
    align-items: center;
    flex-direction: column;
    background-color : #FFEF9B;
`;


const InputBox = styled.input`
    margin-top : 30px;
    width : 300px;
    hegiht : 300px;
    border-radius : 30px;
    border : none;
    padding : 20px;
    font-size: 25px;
    color : #232323
    outline: none;

    &::placeholder{
		color: #232323;
	}

	&:hover{

	}

	&:focus{
        outline: none;
	}
`;
const NicknameBox = styled(InputBox)`
    background-color : #FFD90F;
`;

const EmailBox = styled(InputBox)`
    background-color : #C45D46;
`;

const PwBox = styled(InputBox)`
    background-color : #37B743;
`;

const RegisterButton = styled.div`
    margin-top : 30px;
    width : 200px;
    hegiht : 300px;
    text-align : center;
    border-radius : 30px;
    border : none;
    padding : 20px;
    background-color : #FFD90F;
    font-size:25px;
    font-weight : 700;
    color : #232323;
    box-shadow: 0px 5px 0px 0px #A66615;

    &:hover{
        margin-top: 45px;
        margin-bottom : 5px;
        box-shadow: 0px 0px 0px 0px #A66615;
	}

`;