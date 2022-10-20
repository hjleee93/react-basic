import React, {useRef, useState, useEffect, useMemo, useCallback} from 'react'
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './inputSample';
import UserList from './UserList'
import CreateUser from './CreateUser';

function countActiveUsers(users){
  console.log('counting active users...')

  return users.filter(user => user.active).length
}

function App() {
  
  //onChange 이벤트를 발생시켜 상태를 바꿀 때도 컴포넌트가 리렌더링 됨
  const [inputs, setInputs] = useState({
    username:'',
    email:''
  })

  const { username, email } = inputs;

  const onChange = useCallback(e =>{
    const {name, value} = e.target
    setInputs({
      ...inputs,
    [name]:value
    })
  }, [inputs])

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

  const onCreate =
   useCallback(
    () =>{
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
    setUsers(users=>users.concat(user)) //함수형 업데이트

    setInputs({
      username:'',
      email:'',
    })

    nextId.current += 1


  },[username, email])

  const onRemove = useCallback((id) =>{
    setUsers(users=> users.filter(user =>
      user.id !== id))
  }, [])

  const onToggle = useCallback(
    (id) =>{
    //불변성을 지키기위해 map 함수 사용
    //객체 수정도 새로운 객체를 만들어서 사용
    setUsers(users=>users.map(
      user => user.id === id
      ? {...user, active: !user.active}: user
    ))  
  }, [])

  const onEdit = (id, user) =>{
    const {username} = user
    // const newObj = {
    //   id: id,
    //   username:
    // }
    setUsers (users.map(
      user => user.id === id 
    ))

  }

  const count = useMemo(()=>countActiveUsers(users),[users]);
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
      onToggle={onToggle}/>
      <div> active users: {count}</div>
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


