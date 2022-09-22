import React, { useState } from 'react';

function Counter() {


  const [number, setNumber] = useState(0);
  //useState 배열을 반환, 첫번째 원소는 현재 상태 두번째 원소는 현재 상태를 바꾸는 함수

  const onIncrease = () => {
    setNumber(prevNumber => prevNumber + 1) //update 함수, 성능 최적화와 관련이 있음
  }
  const onDecrease = () => {
    setNumber(number - 1)

  }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>

    </div>
  )
}

export default Counter;
