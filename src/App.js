import React, { useState } from "react";

function App() {

  const [likes, setLikes] = useState(0); // переменная в которой находится состояние отображаемого значения
  const [value, setValue] = useState("Text in input"); 

  function increment() {
    // Изменяем с помощью специального метода
    setLikes(likes+1);
  }

  return (
    <div className="App">
        <h1>{likes}</h1> 
        <h1>{value}</h1>
        
        {/* Если написать так, то нельзя будет изменить значение в input на странице */}
        {/* <input type="text" value={value}/> */}

        {/* Применяем двухстороннее связывание */}
        {/* Подобные компоненты называются управляемыми */}
        <input 
            type="text" 
            value={value}
            onChange={event => setValue(event.target.value)}
        />

        <button onClick={increment}>Increment</button>
        <button onClick={()=> { setLikes(likes-1) }}>Decrement</button>
    </div>
  );
  
}

export default App;
