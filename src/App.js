import React, {useRef, useState, useEffect, useMemo, useCallback, useReducer, createContext} from 'react'
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './inputSample';
import UserList from './UserList'
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function countActiveUsers(users){
  console.log('counting active users...')

  return users.filter(user => user.active).length
}
const initialState = {
  // inputs:{
  //   username:'',
  //   email:''
  // },
  users:[
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
  ]
}

function reducer(state, action){
  switch(action.type){

    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs:{
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   };
      case 'CREATE_USER':
        return{
          inputs:initialState.inputs,
          users:state.users.concat(action.user)
        }
      case 'TOGGLE_USER':
        return{
          ...state,
          users:state.users.map(user=>
            user.id === action.id ? {...user, active: !user.active} : user)
        };

        case 'REMOVE_USER':
          return{
            ...state,
            users:state.users.filter(user=> user.id !== action.id )
          }
      default:
        throw new Error('unhandled action ')
  }

}

export const UserDispatch = createContext(null)//초기값은 필요없으므로 null

function App() {
  const nextId = useRef(4)

  const [state, dispatch] = useReducer(reducer, initialState)//state 안에 initialState로 inputs, users 가 있으므로 비구조 할당을 통해서 컴포넌트에 전달 

  const [form, onChange, reset] = useInputs({
    username:'',
    email:'',
  })

  const {username, email} = form
  const { users } = state;
  // const {username, email} = state.inputs

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;

  //   dispatch({
  //     type:'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // },[]) //useCallback 을 통해 함수 재사용

  const onCreate = useCallback(()=>{
    dispatch({
      type:'CREATE_USER',
      user:{
        id:nextId.current,
        username,
        email
      }
    })
    
    nextId.current+=1
    reset()
  }, [username, email, reset ]) //reset은 넣어주지 않아도 되지만 useCallback 에서 사용하고 있으므로 esLint 문법상 넣어야 한다

  // const onToggle = useCallback(id=>{
  //   dispatch({
  //       type:'TOGGLE_USER',
  //       id
  //   })
  // }, []) //함수를 계속 재사용하게 되므로 deps 는 []


  // const onRemove = useCallback(id=>{
  //   dispatch({
  //       type:'REMOVE_USER',
  //       id
  //   })
  // }, [])

  const count = useMemo(()=>countActiveUsers(users), [users])


  
  return (
  
    <UserDispatch.Provider value={dispatch}> 
    {/*  useReduce로 받아온 값을 value 값으로 넣음*/}
      <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
      
       
        />
      <UserList 
      // onToggle={onToggle}
      // onRemove ={onRemove}
      users={users}
     />
     {/* user 컴포넌트에서 사용할 onToggle, onRemove 컴포넌트를 전달하기 위해서 
     UserList에 전달 후 user 컴포넌트로 다시 전달하는 형식, 바로 전달하기 위해서
     UseContext를 사용하면 바로 전달이 가능하다 */}
      <div> active users: {count}</div>
    </UserDispatch.Provider>
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


