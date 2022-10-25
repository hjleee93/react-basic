import { useState, useReducer, useCallback} from 'react';

function reducer(state, action){
  switch(action.type){
    case 'CHANGE':
      return {
            ...state,
            // inputs:{
            //   ...state.inputs,
              [action.name]: action.value
            // }
          };
          //숙제 오답  [action.name]: action.value
      case 'RESET':
        return Object.keys(state).reduce((acc, current) => {
          acc[current] = '';
          return acc;
        }, {});
  }

}


//custom hook
function useInputs(initialForm){//form에서 사용할 초기값

  const [state , dispatch] = useReducer(reducer, initialForm)


  // const [ form, setForm] = useState(initialForm);

  const onChange = useCallback(e =>{

    const {name, value} = e.target;

    dispatch({
      type:'CHANGE',
      name, 
      value
    })
    // setForm(form => ({...form, [name] : value}));

  }, [])

  const reset  = useCallback(()=>

  dispatch({
    type:'RESET',
    // initialForm
    //오답 : initialForm은 필요없음 그 대신 deps에 [] 을 널어줘야함
  }), []
  )
  // setForm(initialForm), [initialForm])


  return [state, onChange, reset]

}

export default  useInputs;