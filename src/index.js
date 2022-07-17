import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPass from './LoginPass/LoginPass'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <LoginPass />
  </React.StrictMode>
)

reportWebVitals()
