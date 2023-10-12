import React, { useState } from "react";
import PostItem from "./components/PostItem";

function App() {

  return (
    <div className="App">
        {/* Cоздаем компонент и передаём внутрь него пропс */}
        <PostItem post={{id: 1, title: 'Javasript', body: 'Description'}}/>
    </div>
  ); 
}

export default App;
