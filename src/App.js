import React, { useRef, useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {

  const [javascript_posts, setPosts_javasript] = useState([
      {id: 1, title: "Javascript", body: "Description"},
      {id: 2, title: "Javascript 2", body: "Description"},
      {id: 3, title: "Javascript 3", body: "Description"},
  ])

  // Состояние поля ввода заголовка поста
  const [title, setTitle] = useState("Введённый по умолчанию текст вместо названия");
  // Состояние поля ввода описания поста
  const [body, setBody] = useState("Введённый по умолчанию текст описания");

  const addNewPost = (e) => {
      e.preventDefault();
      
      const newPost = {
        id: Date.now(),
        title,
        body
      }
      // Передаем старый массив и добавляем новый пост
      setPosts_javasript([...javascript_posts, newPost]);
      // Очищаем input после добавления поста
      setTitle('');
      setBody('');
  }

  return (
    <div className="App">
        <form>
            <MyInput 
                value = {title}
                onChange={event => setTitle(event.target.value)}
                type="text" 
                placeholder="Название текста"
            />
            <MyInput 
                  value = {body}
                  onChange={event => setBody(event.target.value)}
                  type="text"
                  placeholder="Описание поста"
            />
           
            <MyButton onClick = {addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts={javascript_posts} title="Список постов Javascript"/> 
    </div>
  ); 
}

export default App;
