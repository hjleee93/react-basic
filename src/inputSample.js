import React, { useState, useRef } from 'react';

function InputSample() {
  // const [text, setText] = useState('')

  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  })
  const nameInput = useRef() // dom에 직접 접근
  const { name, nickname } = inputs
  const onChange = (e) => {
    const { name, value } = e.target;

    //객체 업데이트, 불변성을 지킴 
    // 1. 기존의 객체를 복사
    // 2. 특정값을 덮어씌움

    setInputs({
      ...inputs,
      [name]: value

    })
    // nextInputs[name] = value

    // setText(e.target.value)
  }

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    })
    nameInput.current.focus()

    // setText('')
  }

  return (
    <div>
      <input name='name'
        placeholder='name'
        onChange={onChange}
        value={name}
        ref={nameInput} />
      <input
        name='nickname'
        placeholder='ninkname'
        onChange={onChange}
        value={nickname} />
      {/* <input onChange={onChange} value={text} /> */}
      <button onClick={onReset}>init</button>
      {/* <div>value: {text} </div> */}

      <div>
        <b>name :{name}({nickname}) </b>
      </div>
    </div>
  )
}

export default InputSample
