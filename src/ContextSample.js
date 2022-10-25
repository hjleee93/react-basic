import React, {createContext, useContext, useState} from "react";


const MyContext = createContext('defaultValue');//context에서 사용할 초기값

function Child(){
  const text = useContext(MyContext) //context에 있는 값을 가져와서 읽어올수 있게함 내장 훅
  return <div>hi! {text}</div>
}

function Parent({text}){
  return <Child text={text}/>
}

function GrandParent({text}){
  return <Parent text={text}/>
}

function ContextSample(){
  const [value, setValue] = useState(true)
  return (
    <MyContext.Provider value={value  ? 'Good' : 'Bad' }>
      <GrandParent text='Good'/>
      <button onClick={()=>setValue(!value)}> click me </button>
    </MyContext.Provider>
    )
}

export default ContextSample;