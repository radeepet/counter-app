import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from './redux/action/counter'

export default function Counter(props) {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Name: {props.name} </h1>
      <h2>Count value {count}</h2>
      <button
        onClick={() => {
            dispatch(increment());
            setCount(count+1)
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
            dispatch(decrement());
            setCount(count-1)
        }}
      >
        Decrement
      </button>
    </div>
  );
}
