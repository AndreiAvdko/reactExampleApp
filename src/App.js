import React, { useState } from "react";
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

  const addNewPost = (e) => {
      // Предотвращает дефолтное поведение браузера - submit формы при нажатии на кнопку
      e.preventDefault();
      // Получаем данные из управляемого inputa
      console.log(title);
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
            <MyInput type="text" placeholder="Описание поста"/>

            {/*
                По умолчанию React не знает в какое место компонента добавлять вложенные элементы
                Для этого предназначен props.children
                Добавляем его в класс MyButton 
            */}
            {/*
                Теперь всё, что написано в атрибутах кнопки отправляется в пропсы и подставляется в MyButton
                Например свойство disabled: <MyButton disabled>Создать пост</MyButton>     
            */}
            <MyButton onClick = {addNewPost}>Создать пост</MyButton>
            
        </form>
        <PostList posts={javascript_posts} title="Список постов Javascript"/> 
    </div>
  ); 
}

export default App;
