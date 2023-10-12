import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/


/* ReactDOM.render(
  <div>
      Приложение работает!
      <button>Click button!</button>
  </div>,
  document.getElementById('root')
);
*/

ReactDOM.render(
  React.createElement('button', {
    onClick: ()=> console.log('click button')
  }, "Click button!"), 
  document.getElementById('root')
);


