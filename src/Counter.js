import React, { useState, useReducer, Component } from 'react';


class Counter extends Component {

  //정식 기본 자바스크립트는 아니지만, 바벨 스크립트에서 작동하는 것으로 사용가능함

  state = {
    counter: 0 ,
    fixed: 1,
    updateMe : {
      toggleMe:false,
      dontChange:1,
    }
  }
  // constructor(props){
  //   super(props);
  //   //해당 컴포넌트에서 사용할 값을 초기화 해줌 
  //   //state는 무조건 객체 형식이여야함
  //   this.state = {
  //     counter: 0
  //   }
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   // this.handleDecrease = this.handleDecrease.bind(this);
  // }
  //custom method
  handleIncrease = () =>{
    //update하고 싶은 값만 update하고 나머지 값은 바뀌지 않음
    this.setState({
      counter :this.state.counter +1,
    })
    console.log(this) //undefinded가 출력이 되는데 onClick 이벤트에 등록되면서 각 컴포넌트와 메서드의 관계가 끊기기 때문
    //해결방법 
    //1. constructor에서 각 함수를 binding 해줌
    //2. custom 함수를 작성할때 화살표 함수를 작설함
    console.log('+')

  }
  handleDecrease = ()=>{
    // console.log(this) 
    // this.setState({
    //   counter :this.state.counter - 1
    // })

    //함수형 방식
    this.setState(state =>({
      counter:state.counter -1
    }))
    //여러개의 state를 써야하는 경우 함수형 방식을 써 주어야 한다. 

 
    console.log('-')

  }

  handleToggle = () =>{
    this.setState({
      //최상단을 변경하는 경우에는 해당 값만 변화가 되지만 
      //해당 값의 안에 추가적인 객체가 있는 경우에는 다 작성해주어야 업데이트기ㅏ 가능핟.

      updateMe:{
        toggleMe: !this.state.updateMe.toggleMe,
      dontChange:1,
      }
    })
  }


  //component가 자체적으로 지닌 method
  render(){
    return(
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <h1>fixed value : {this.state.fixed}</h1>

      </div>
    )
  }
 
}
// function reducer(state, action){//state 값은 아무거나 들어올 수있음

//   switch(action.type){
//     case 'INCREMENT':
//       return state +1;
//       case 'DECREMENT':
//         return state - 1;
//         default:
//           throw new Error('unhandled error')
//   }
// }


// function Counter() {

//   const [number, dispatch] = useReducer(reducer, 0)


//   // const [number, setNumber] = useState(0);
//   //useState 배열을 반환, 첫번째 원소는 현재 상태 두번째 원소는 현재 상태를 바꾸는 함수

 

//   const onIncrease = () => {
//     // setNumber(prevNumber => prevNumber + 1) //update 함수, 성능 최적화와 관련이 있음
//     dispatch({
//       type:'INCREMENT'
//     })
//   }
//   const onDecrease = () => {
//     // setNumber(number - 1)
//     dispatch({
//       type:'DECREMENT'
//     })

//   }
//   return (
//     <div>
//       <h1>{number}</h1>
//       <button onClick={onIncrease}>+1</button>
//       <button onClick={onDecrease}>-1</button>

//     </div>
//   )
// }

export default Counter;
