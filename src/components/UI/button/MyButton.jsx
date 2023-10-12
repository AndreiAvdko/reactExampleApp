import React from "react";
// Импортируем стили как некоторый объект из файла со стилями
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
        /* Подключаем стили */
        /* Пробрасываем пропсы в атрибуты кнопки */
        <button {...props} className={classes.myBtn}>
            {/*
                По умолчанию React не знает в какое место компонента добавлять вложенные элементы
                Для этого предназначен props.children {props.children} 
            */}
            {/*
                Поскольку children в параметрах функции, можем использовать просто children 
            */}
            {children}
        </button>
    );
};

export default MyButton;