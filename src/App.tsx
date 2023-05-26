// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import styled from 'styled-components'
import Sheet from './componets/Sheet/Sheet'

const AppWraper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
background: rgba(253, 203, 110, 1);
`


const App = () => {
 

  return (
    
    <AppWraper>
      <Sheet>ghj</Sheet>
      </AppWraper>
  );      
};

export default App
