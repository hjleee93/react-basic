import React, {useEffect, useContext} from 'react';
//여러 컴포넌트에 걸쳐서 데이터를 넘겨줘야하는 경우 useContext를 사용해서 넘겨주면 편리함
import { UserDispatch } from './App';

//한 파일의 여러개의 컴포넌트가 있어도 무관
const User = React.memo(function User ({ user}) {
  const {id, username, email, active } = user;
  const dispatch = useContext(UserDispatch)
  
  
  return (
      <div>
        <b
        onClick={()=>dispatch({
          type:'TOGGLE_USER',
          id
        })}
        style={({
          color :active ? 'green' : 'black',
          cursor:'pointer'
        })}>{username}</b>
        <span>({email})</span>
        <button onClick={() => dispatch({
          type:'REMOVE_USER',
          id
        })}>Remove</button>
      </div>
  )
})

function UserList({users, onRemove, onToggle}) {
  
  return (
    <div>
      {
        users.map(
          user => (
          <User 
            user={user} 
            key={user.id}
            />)
        )
      }
    </div>

  )
}

export default React.memo(
  UserList, (prevProps, nextProps) => nextProps.users === prevProps.users)


