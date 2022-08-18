import logo from './logo.svg';
import './App.css';
import {useCallback, useState} from "react";
import Counter from "./components/counter.component";

function App() {
  const [status, setStatus] = useState(false);

  const getStatus = useCallback(() => {
    console.log("render status " + status);
    setStatus(!status);
  },[]);

  console.log("render App")


  return (
    <div className="App">
    <Counter functionProp={getStatus}/>

      <button onClick={getStatus} >CLICK</button>
    </div>
  );
}

export default App;
