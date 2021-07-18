import './App.css';
import Counter from './Counter'
import { useSelector } from "react-redux";

function App() {
  const count = useSelector((state)=>state.counter.count);
  const empName = ["Test1", "Test2"];
  return (
    <div className="App">
      <h1>Hello Counter</h1>
      <h2>Count value : {count} </h2>
      {empName.map(emp => (
        <Counter name={emp}/>
      ))}
    </div>
  );
}

export default App;
