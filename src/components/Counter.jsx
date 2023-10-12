// Проверяем импорты
import React, { useState } from "react";

// Компонент называется так же как и файл, в котором он расположен
// Компонент это просто функция, которая возвращает какой-то jsx

const Counter = function() {
    const [count, setCount] = useState(0);

    function increment() {
        // Изменяем с помощью специального метода
        setCount(count+1);
    }

    function decrement() {
        // Изменяем с помощью специального метода
        setCount(count-1);
      }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

// Прописываем экспортирование компонента, чтобы его можно было использовать
export default Counter;