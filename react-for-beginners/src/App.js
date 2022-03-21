import { useState , useEffect } from "react";
  
function App() { //app함수의 반환값이 많아지면 소괄호로 감싼다
  const [counter, setValue] = useState(0);
  const [keyword,setKeyword] = useState("");
  const onClick = () => setValue((prev)=>prev + 1);
  const onChange = (event) =>setKeyword(event.target.value);
  console.log("i run all the time");

  useEffect(() => {
    console.log("CALL THE API...")
  },[]); //component가 처음 render할 때 실행되고 다시는 실행되지 않을 function을 넣어준다.
  //react 가 지켜보고 있지 않으므로 한번만 실행됨
  useEffect(() => {
    if(keyword !== "" && keyword.length >5){
      console.log("I run when 'keyword' changes.");
    }
  },[keyword]); //keyword가 변할때만 실행되는 코드
  useEffect(() => {
    console.log("I run when 'counter' changes. ");
  },[counter]); //counter가 변할때만 실행되는 코드
  useEffect(() => {
    console.log("I run when 'keyword'&'counter' changes. ");
  },[keyword,counter]); //여러개의 속성이 변할때 실행되게 할 수 있음

  


  return (
    <div>
      <input 
      value={keyword}
      onChange={onChange} type="text" placeholder="Search here..."/>
      <h1>{counter}</h1>
      <button onClick={onClick}>clickme</button>
    </div>
  );
}

export default App;