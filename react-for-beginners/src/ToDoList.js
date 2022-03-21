import { useState , useEffect } from "react";

function ToDoList() {
    const [toDo, setToDo] =useState("");
    const [toDos,setToDos] = useState([]);
    const onChange = (event) => setToDo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === ""){
            return ;
        } //form 은 submit의 속성을 가지고 있기때문에 제출시 새로고침된다. 이를 막기 위해
        setToDo("");
        setToDos((currentArray) => [toDo, ...currentArray]); //단순히 값을 보내는 것이 아니라 함수를 보내는 방법 // 현재의 toDos를 받아와서 새로운 toDo를 추가한 array로 return 한다.
    };
    console.log(toDos);
    return <div>
        <h1>My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} 
            value={toDo} 
            type="text" 
            placeholder="Write your to do..."/>
            <button>Add To Do</button>
        </form> 
        <hr />
        <ul>
        {toDos.map((item,index)=>(
            <li key={index}>{item}</li>))}
        </ul> 
        
    </div> //map의 첫번째 argument인 item은 toDo를 의미한다. todos를 가져와서 map 함수를 통해 item들을 li로 바꿈
}

export default ToDoList;