import { useState , useEffect } from "react";
  
function App() { //app함수의 반환값이 많아지면 소괄호로 감싼다
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev)=>prev + 1);
  console.log("i run all the time");
  
  useEffect(() => {
    console.log("CALL THE API...")
  },[]); //component가 처음 render할 때 실행되고 다시는 실행되지 않을 function을 넣어준다.
  
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>clickme</button>
    </div>
  );
}

export default App;