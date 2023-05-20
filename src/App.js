import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decreaseNum, increaseNum } from './action'

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={() => dispatch(decreaseNum())}>-</button>
      <input type="text" value={myState} />
      <button onClick={() => dispatch(increaseNum())}>+</button>
    </div>
  )
}

export default App
