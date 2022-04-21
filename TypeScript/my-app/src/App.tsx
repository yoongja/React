import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {//interface React.FormEvent<T = Element> -> 어떤종류의 element가 onChange 이벤트를 발생시킬지 특정할 수 있다
      //TS는 onChange 함수가 inputElement에 의해서 실행될 것을 알게된다.
      //event.currentTarget.value
      const {
        currentTarget: { value },
      } = event; //event를 여는 방법
      setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("hello", value);
    };
  }; 
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>

  );
}

export default App;
