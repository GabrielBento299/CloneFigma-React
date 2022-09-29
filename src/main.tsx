import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App'
import GlobaStyle from './styles/global'
 
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />    
    <GlobaStyle />
   </React.StrictMode>
)
