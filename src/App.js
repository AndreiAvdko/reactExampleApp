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

  // В качестве значений используем объект post и его поля
  const [post, setPost] = useState({
                                      title:'', 
                                      body:''
                                    });
  
  const addNewPost = (e) => {
      e.preventDefault();
      
      // Передаем старый массив и добавляем новый пост
      // разворачивая информацию из поста и добавляя id
      setPosts_javasript([...javascript_posts, {...post, id: Date.now()}]);
      
      // Очищаем input после добавления поста
      setPost({
        title: '',
        body: ''
      });
  }

  return (
    <div className="App">
        <form>
            <MyInput 
                value = {post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
                type="text" 
                placeholder="Название текста"
            />
            <MyInput 
                  value = {post.body}
                  onChange={e => setPost({...post, body: e.target.value })}
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
