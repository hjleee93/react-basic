import React, {useRef, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './inputSample';
import UserList from './UserList'
import CreateUser from './CreateUser';

function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  })

  const { username, email } = inputs;

  const onChange = e =>{
    const {name, value} = e.target
    setInputs({
      ...inputs,
    [name]:value
    })
  }

  // 배열을 추가하거나 바꾸는 경우 push, splice, sort..등과 같은 함수를 쓴느데
  // 리액트에서는 사용하지 않는다
  // 객체와 동일하게 불변성을 지키면서 새로운 항목을 만들어야한다.
  
  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'hj',
      email: 'hj1@hj.com',
      active:true,
    },
    {
      id: 2,
      username: 'hj2',
      email: 'hj2@hj.com',
      active:false,
    },
    {
      id: 3,
      username: 'hj3',
      email: 'hj3@hj.com',
      active:false,

    }
  ])
  
  const nextId = useRef(4)

  const onCreate = () =>{
    //새로운 유저 객체 생성
    const user = {
      id: nextId.current,
      // ...inpus 와 동일
      username,
      email
    }
    
    // 배열에 항목을 추가 하는 방식 : 
    // 1. spread 연산자,
    // 2. concat
    // push같은 함수를 사용하면 업데이트가 되지않음!
    // setUsers([...users, user]);
    setUsers(users.concat(user))

    setInputs({
      username:'',
      email:'',
    })

    nextId.current += 1


  }
  const onRemove = (id) =>{
    setUsers( users.filter(user =>
      user.id !== id))
  }

  const onToggle = (id) =>{
    //불변성을 지키기위해 map 함수 사용
    //객체 수정도 새로운 객체를 만들어서 사용
    setUsers(users.map(
      user => user.id === id
      ? {...user, active: !user.active}: user
    ))  
  }
  return (

    <>
      <CreateUser 
        username={username} 
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        />
      <UserList 
      users={users}
      onRemove={onRemove}
      onToggle={onToggle}></UserList>
    </>
    // <Counter></Counter>
    // <InputSample />
    // <Wrapper>
    //   <Hello color="red" isSpecial={true} />
    //   {/* isSpecial의 값을 전달하지 않는 경우 true로 취급됨 */}
    //   <Hello name="hj" color="blue" />
    // </Wrapper>
  );
}
export default App;


