import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App.jsx';
import store from './Redux/Store.jsx';
import Provider from 'redux';
ReactDOM.createRoot(document.getElementById('root')).render(

     <Provider store={store}>
     <App />
   </Provider>
      
)

