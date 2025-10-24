import React, { useReducer } from 'react'

const Counter = () => {

    const reducer = (state,action)=>{

        console.log(action);
        console.log(state.count);
        switch(action.type) {
            case "increment" : {
                return { count : state.count+1};
            }
            case "decrement" : {
                return {count : state.count-1};
            }
            
        }

    }

//  Going through use reducer 

const[state , dispatch] = useReducer(reducer , {count : 0})

  return (
    <div>
      <button onClick={() => dispatch({type : "increment"})}>+</button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({type : "decrement"})}>-</button>
    </div>
  )
}

export default Counter
