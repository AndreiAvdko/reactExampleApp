import React from "react";
import '../styles/App.css'

const PostItem = (props) => {
    return (
        <div className="post content">
          {/* Получаем данные из переданных в компонент пропсов и подставляем в разметку */}
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
              {props.post.body}
          </div>
          <div class="post btns">
              <button>Удалить</button>
          </div>
      </div>
    )
}

export default PostItem;