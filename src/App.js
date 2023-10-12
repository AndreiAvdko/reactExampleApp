import React, { useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {

  const [value, setValue] = useState("Text in input"); 

  return (
    <div className="App">
      {/* Подключение созданного компонента-функции */}
      <Counter/>
      <ClassCounter/>
    </div>
  );
  
}

export default App;
