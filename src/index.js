import React from 'react';
import ReactDOM from 'react-dom';
import 'macro-css'
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './components/store/State.js';

ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root')
);






// export let render = (state) => {
//   ReactDOM.render(
//     <BrowserRouter>
//       <App state={state} 
//            dispatch={store.dispatch.bind(store)} />
//     </BrowserRouter>,
//     document.getElementById('root')
//   );
// }


// render(store.getState());

// store.subscribe(render)