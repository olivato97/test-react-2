import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import rootReducer from './redux/reducer'
import 'semantic-ui-css/semantic.min.css'
const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL:'http://localhost:3004',
    responseType: 'json'
  });
  
const store = createStore(
    rootReducer,
    axiosMiddleware(client),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'))

registerServiceWorker()
