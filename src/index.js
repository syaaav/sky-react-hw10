import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import LoginPass from './LoginPass/LoginPass'
import HexColors from './HexColors/HexColors'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <LoginPass /> */}
    <HexColors />
  </React.StrictMode>
)

reportWebVitals()
