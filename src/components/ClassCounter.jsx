import React from "react";


// Наследуемся от React.Component
class ClassCounter extends React.Component {
    // В классовом компоненте состояние реализуется иначе
    // Поскольку здесь нельзя использовать хуки, реализуем конструктор принимающий пропсы:
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        // Биндится контекст в используемые функции 
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }


    increment() {
        // Состояние изменяется через setState()
       this.setState( {count: this.state.count + 1} )
    }

    decrement() {
        // Состояние изменяется через setState()
        this.setState( {count: this.state.count - 1} )
    }

    // Необходимо реализовать функцию render(), которая будет возвращать jsx
    render() {
        return (
            <div>
                {/* Обращаться следует не напрямую, а через состояние state */}
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        )
    }
}

// Экспортируем компонент для использования
export default ClassCounter;