import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
    <Global/>
    <App />
    </>
    
  </React.StrictMode>,
)
