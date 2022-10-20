import React, {useEffect} from 'react';

//한 파일의 여러개의 컴포넌트가 있어도 무관
const User = React.memo(function User ({ user, onRemove, onToggle }) {
  const {id, username, email, active } = user;
  
  //특정값이 업데이트되고 난 후에 실행되는 함수, 처음나타날때도 실행이된다
  //props로 받는 값이나 useState 값으로 관리하고 있는 함수를
  //useEffect에서 사용하는 경우 deps에 꼭 넣어주어야한다
  //약간 vue.js 의 watch 와 비슷한 거 같음 
  useEffect(()=>{
    console.log('component appeared', user)
    //mount
    // props -> state
    // rest API
    // setInterval, setTimeout
    return () =>{
      //deps 가 바뀌기 직전에도 호출이 되고 사라지기 전에도 호출이 된다
      
      //unmount(cleaner 함수 )
      //clearInterval, clearTimeout
      //라이브러리 인스턴스 제거
      console.log('component removed', user)
    }

  },[user])// deps: dependency 의존되는 값 , 값이 들어가는 경우 해당 값이 변할 때마다 useEffect 가 실행된다
  //deps 를 생략한 경우 모든 컴포넌트에서 실행이 된다. 
  // 부모컴포넌트가 리렌더링 되는 경우 자식 컴포넌트도 리렌더링 되기때문

  
  return (
      <div>
        <b
        onClick={()=>onToggle(id)}
        style={({
          color :active ? 'green' : 'black',
          cursor:'pointer'
        })}>{username}</b>
        <span>({email})</span>
        {/* 매개변수를 넘기기 위해서 함수를 새로 정의
          함수를 바로 호출한다면 컴포넌트가 렌더링되자마자 
          실행되기때문에 주의! */}
        {/* <input name="editName" onChange={onChange} value={editName} /> */}

        <button onClick={() => onRemove(id)}>Remove</button>
      </div>
  )
})

function UserList({users, onRemove, onToggle}) {
  console.log('user component')
  
  return (
    //하나하나 접근하는 방식
    // <div>
    //   <div>
    //     <b>{users[0].username}</b>
    //     <span>({users[0].email})</span>
    //   </div>
    // </div>


    //미세하게 나아진 방식
    // <div>
    //   <User user={users[0]}></User>
    //   <User user={users[1]}></User>
    //   <User user={users[2]}></User>
    // </div>

    <div>
      {/* id와 같은 unique한 key 값이 없다면 map의 index값을 넣어줘도 되지만
    단순 경고 제거이므로 성능 향상에는 관계가 없다.
    key 값이 있어야 배열의 수정이나 삭제가 일어날 경우에
    해당하는 key값으로 찾기 때문에 성능이 좋은 반면
    인덱스의 경우 덮어 씌운 후에 빼거나 더하는 방식으로 이루어지기 때문에
    성능에 좋지 못하다 */}
      {
        
        users.map(
          user => (
          <User 
            user={user} 
            key={user.id}
            onRemove={onRemove}
            onToggle={onToggle} 
            />)
        )
      }
    </div>

  )
}

export default React.memo(
  UserList, (prevProps, nextProps) => nextProps.users === prevProps.users)


