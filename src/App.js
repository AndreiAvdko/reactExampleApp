import React, { useState } from "react";

function App() {

  // Каждый компонент обладает состоянием
  // При изменении состояния React изменяет компонент перерендеривая его

  
  /* В данном примере изменение переменной не будет отображаться в заголовке
  let likes = 5;

  function increment() {
    likes++;
    console.log(likes);
  }

  return (
    <div className="App">
        <h1>{likes}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={()=> { likes--; console.log(likes) }}>Decrement</button>
    </div>
  );
  */


  // В данном примере всё работает
  const [likes, setLikes] = useState(0); // переменная в которой находится состояние отображаемого значения
  
  function increment() {
    // Изменяем с помощью специального метода
    setLikes(likes+1);
  }

  return (
    <div className="App">
        <h1>{likes}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={()=> { setLikes(likes-1) }}>Decrement</button>
    </div>
  );
  
}

export default App;
