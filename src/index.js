import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import MucukApp from './App';





  ReactDOM.render(
    
    <MucukApp />,
  document.getElementById('root'))


/*store.subscribe(()=>{rerendertree(store.getState())})
let rerendertree=(state)=>{;}

*/
//state={store.getState()} store={store} dispatch={store.dispatch.bind(store)} 
//addpost={store.addp.bind(store)} updpost={store.updateNewPostText.bind(store)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
