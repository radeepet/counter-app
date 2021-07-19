import './App.css';
import Counter from './Counter'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getUser } from './redux/action/user';

function App() {
const dispatch = useDispatch();

useEffect(() => {
  dispatch(getUser());
},[]);

const user = useSelector((state)=>state.user.user);
  const count = useSelector((state)=>state.counter.count);
  const empName = ["Test1", "Test2"];
  return (
    <div className="App">
      {user && <h1>Hello , {user.firstName} {user.lastName} ...</h1>}
      <h1>Hello Counter</h1>
      <h2>Count value : {count} </h2>
      {empName.map(emp => (
        <Counter name={emp}/>
      ))}
    </div>
  );
}

export default App;
