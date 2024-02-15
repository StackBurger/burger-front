import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import patty from '../../assets/img/patty.png';
import tomato from '../../assets/img/tomato.png';
import lettuce from '../../assets/img/lettuce.png';
import cheese from '../../assets/img/cheese.png';
import onion from '../../assets/img/onion.png';
import bacon from '../../assets/img/bacon.png';
import backicon from '../../assets/img/tongs.png';
import bread_top from '../../assets/img/bread_top.png';
import bread_bottom from '../../assets/img/bread_bottom.png';
import bugger from '../../assets/img/bugger.png';
import bell from '../../assets/img/bell.png';
import { Link } from 'react-router-dom';

const IngredientStack = ({ orders }) => {
  const [stack, setStack] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [top, setTop] = useState(null);

  useEffect(() => {
    console.log("주문 배열:", orders);
  }, [orders]);

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

    if (value === 0) {
      const reversedOrders = [...orders].reverse();
      let ordersMatch = true;
      for (let i = 0; i < newStack.length; i++) {
          if (newStack[i] !== reversedOrders[i]) {
              ordersMatch = false;
              break;
          }
      }
      console.log("비교 결과:", ordersMatch ? 1 : 0);
  }

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
          top === 0 ? bread_top :
          top === 1 ? tomato :
          top === 2 ? lettuce :
          top === 3 ? onion :
          top === 4 ? bacon :
          top === 5 ? cheese :
          top === 6 ? patty :
          top === 7 ? bread_bottom :
          null
      }></Dish>
      <Bell to={'/outro'}/>
      <Desk>
        <TopIngredient onClick={() => handlePush(0)} image={bread_top}></TopIngredient>
        <TopIngredient onClick={() => handlePush(1)} image={tomato}></TopIngredient>
        <TopIngredient onClick={() => handlePush(2)} image={lettuce}></TopIngredient>
        <TopIngredient onClick={() => handlePush(3)} image={onion}></TopIngredient>
        <TopIngredient onClick={() => handlePush(4)} image={bacon}></TopIngredient>
        <TopIngredient onClick={() => handlePush(5)} image={cheese}></TopIngredient>
        <TopIngredient onClick={() => handlePush(6)} image={patty}></TopIngredient>
        <TopIngredient onClick={() => handlePush(7)} image={bread_bottom}></TopIngredient>
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

const BackButton = styled.div`
    left: 50px;
    top: 50px;
    position : absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background : url(${backicon});
    background-size : cover;
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

const Bell = styled(Link)`
    position : absolute;
    top: 55px;
    left: 545px;
    width : 90px;
    height : 90px;
    background : url(${bell});  
    background-size: cover;
    cursor: pointer;
`;
