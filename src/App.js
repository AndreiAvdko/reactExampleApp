import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
      {id: 1, title: "Javascript", body: "Description"},
      {id: 2, title: "Javascript 2", body: "Description"},
      {id: 3, title: "Javascript 3", body: "Description"},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  

  return (
    <div className="App">
        {/* Передаем в компонент PostForm функцию обратного вызова callback createPost() */}
        <PostForm create={createPost}/>
        <PostList posts={posts} title="Список постов Javascript"/> 
    </div>
  ); 
}

export default App;
