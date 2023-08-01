import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './utils/routes'

import './assets/css/global/style.css'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>,
)
