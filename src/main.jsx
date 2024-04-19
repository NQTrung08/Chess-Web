import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
ReactDOM.createRoot(document.getElementById('root')).render(
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: 'main-color',
        fontSize: 16
      }
    }}
  >

    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>

    </React.StrictMode>
  </ConfigProvider>
)
