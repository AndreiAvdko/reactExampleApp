import React from "react";
import classes from './MyInput.module.css';

// Оборачиваем компонент в функцию React.forwardRef()
const MyInput = React.forwardRef((props, ref) => {
    return (
        // Указываем в самом компоненте куда должна попадать ссылка
        <input ref={ref} className={classes.myInput} {...props}/>
    );
});

export default MyInput;