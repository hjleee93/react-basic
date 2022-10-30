import React, {Component} from 'react';

class Hello extends Component{
//class component에서 default 설정

  static defaultProps = {
    name: 'no name'
  }
  render(){
    const { color, isSpecial, name} = this.props;
    return (
      <div>
        {isSpecial && <b></b>}
        hi {name}
      </div>
    )

  }
}


// 전달된 값이 props에 객체로 저장되어 있음
// 객체이므로 구조분해 할당을 쓰면 코드가 깔끔함 
// function Hello(props) {

//   return (
//     <div style={{ color: props.color }}>
//       {props.isSpecial ? <b>*</b> : null}
//       {/* 위의 경우에는 결과값에 따라 내용이 달라지는 것이 아니기 때문에
//       AND 연산자가 더 나음(단순 값을 보여주고 숨기며 관리하는 것은 AND연산자가 나음)
//       => props.isSpecial && <b>*</b> 
      
      
//         null, false, undefined 를  렌더링하는 경우 아무것도 뜨지 않음
//         0은 나옴!*/}
//       hello Component...{props.name}</div>
//   );

// }

//props값의 default 설정
// Hello.defaultProps = {
//   name: 'no name'
// }



export default Hello

