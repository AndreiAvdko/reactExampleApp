import React, { useState } from "react";
import PostList from "./components/PostList";

function App() {

  const [javascript_posts, setPosts_javasript] = useState([
      {id: 1, title: "Javascript", body: "Description"},
      {id: 2, title: "Javascript 2", body: "Description"},
      {id: 3, title: "Javascript 3", body: "Description"},
  ])

  const [python_posts, setPosts_python] = useState([
    {id: 1, title: "Python", body: "Description"},
    {id: 2, title: "Python 2", body: "Description"},
    {id: 3, title: "Python 3", body: "Description"},
])

  return (
    <div className="App">
        <PostList posts={javascript_posts} title="Список постов Javascript"/>
        <PostList posts={python_posts} title="Список постов Python"/> 
    </div>
  ); 
}

export default App;
