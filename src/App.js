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

  // C помощью этого хука можно получить доступ к DOM-элементу
  // и у этого Dom-элемента забрать value
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
      // Предотвращает дефолтное поведение браузера - submit формы при нажатии на кнопку
      e.preventDefault();
      // Получаем данные из управляемого inputa
      console.log(title);
      
      // У ссылки bodyInputRef есть единственное поле current 
      // И в нашем случае это и есть DOM-элемент у которого есть поле value
      // и это поле можно получить
      console.log(bodyInputRef.current.value)
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

            {/* 
                Указываем пропс ref и передаем в него созданную с помощью useRef() ссылку 
                Пример с простым input
                <input ref={bodyInputRef} type="text"/>
            */}

            {/* 
                Из-за того, что компонент кастомный 
                React по дефолту не знает куда именно
                нужно передать ссылку bodyInputRef 
            */}
            {/* 
                Такой компонент называется неуправляемым или неконтролируемым 
            */}

                <MyInput 
                    // Указываем пропс ref и передаем в него созданную с помощью useRef() ссылку
                    ref = {bodyInputRef}
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
