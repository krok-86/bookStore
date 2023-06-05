// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import AppStyled from './AppStyled.ts';
import NavBar from './componets/NavBar/NavBar.tsx';
import SliderImg from './componets/FirstPage/Slider/SliderImg/SliderImg.tsx';

const App = () => {
 

  return (
    
    <AppStyled >
    <NavBar/>
    <SliderImg />
    </AppStyled>
    
  );      
};

export default App
