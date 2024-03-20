import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
<<<<<<< HEAD:apps/frontend/full-feature-fe/src/main.jsx
import './index.css'
import {store } from './redux/store.js'
import {Provider} from 'react-redux'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
=======
import "./styles/style.scss";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
>>>>>>> dev:apps/frontend/catalog-fe/src/main.jsx
  </React.StrictMode>,
)
