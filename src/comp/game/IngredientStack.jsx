import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import patty from '../../assets/img/patty.png';
import tomato from '../../assets/img/tomato.png';
import backicon from '../../assets/icon/backicon.svg';
import bread_top from '../../assets/img/bread_top.png';
import bread_bottom from '../../assets/img/bread_bottom.png';

const IngredientStack = () => {
  const [stack, setStack] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [top, setTop] = useState(null);

  useEffect(() => {
    console.log("현재 스택 값:", stack);
    console.log("Top 값:", top);
  }, [stack, top]);

  const handlePush = (value) => {
    const newStack = [...stack, value];
    setStack(newStack);
    setTop(value);
    setErrorMessage("");
    console.log("스택에 값이 추가되었습니다:", value);
  };

  const handlePop = () => {
    if (stack.length > 0) {
      const newStack = [...stack];
      newStack.pop();
      setStack(newStack);
      setTop(newStack.length > 0 ? newStack[newStack.length - 1] : null);
      setErrorMessage("");
      console.log("스택에서 값이 제거되었습니다.");
    } else {
      setErrorMessage("Stack is empty.");
    }
  };

  const handleClear = () => {
    setStack([]);
    setTop(null);
    setErrorMessage("");
    console.log("스택이 초기화되었습니다.");
  };

  const handleBlueCircleClick = () => {
    console.log("현재 스택 값:", stack);
  };

  return (
    <>
      <BackButton onClick={handlePop}></BackButton>
      <Dish image={
          top === "1" ? patty :
          top === "2" ? tomato :
          top === "0" ? bread_top :
          top === "7" ? bread_bottom :
          null
      }></Dish>
      <Desk>
        <TopIngredient onClick={() => handlePush("0")} image={bread_top}></TopIngredient>
        <TopIngredient onClick={() => handlePush("1")} image={patty}></TopIngredient>
        <TopIngredient onClick={() => handlePush("2")} image={tomato}></TopIngredient>
        <TopIngredient onClick={() => handlePush("7")} image={bread_bottom}></TopIngredient>
        <BlueCircle onClick={handleBlueCircleClick}></BlueCircle>
      </Desk>
      </>
  );
};

export default IngredientStack;


const TopIngredient = styled.div`
    width : 100px;
    height : 100px;
    background : url(${props => props.image});
    background-size: cover;
    cursor: pointer;
`;

const Desk = styled.div`
    position: absolute;
    left: 100px;
    bottom: 100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 100px;
    justify-content: center;
    align-items: center;
`;

const BlueCircle = styled.div`
    width: 100px;
    height: 100px;
    background-color: blue;
    border-radius: 50%; /* 원형 모양으로 만듦 */
    cursor: pointer;
`;

const BackButton = styled.div`
    left: 50px;
    top: 50px;
    position : absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background : url(${backicon});
`;

const Dish = styled.div`
    width: 100px;
    height: 100px;
    left: 200px;
    top: 100px;
    position : absolute;
    background: url(${props => props.image});
    background-size: cover;
    border-radius: 50%; /* 원형 모양으로 만듦 */
    cursor: pointer;
`;
