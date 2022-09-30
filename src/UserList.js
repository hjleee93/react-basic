import React from 'react';

//한 파일의 여러개의 컴포넌트가 있어도 무관
function User({ user, onRemove, onToggle }) {
  const {id, username, email, active } = user;
  return (
    <div>
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
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>
    </div>
  )
}

function UserList({users, onRemove, onToggle}) {
  
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
          user => (<User 
            user={user} 
            key={user.id}
            onRemove={onRemove}
            onToggle={onToggle} />)
        )
      }
    </div>

  )
}

export default UserList


