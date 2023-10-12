import React from "react";
import PostItem from "./PostItem";

const PostList = ({posts, title})=> {
    return (
        <div>
            {/*
                В React есть возможность использование inline стилей
                Название свойства должно указываться не через дефис, а с помощью camelCase,
                если название состоит из двух слов
            */}
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {/*
                При создании списков обязательным условием является указание некоторого ключа,
                который должен хранить уникальное значение для каждого элемента, например id-объекта
                Ключи позволяют компонентам реакта эффективнее рендерить произошедшие изменения
            */}
            
            { posts.map( (post) => 
                    <PostItem post={post} key={post.id}/>
            
            )}
        </div>
    );
}

export default PostList;