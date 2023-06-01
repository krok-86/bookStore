// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import AppStyled from './AppStyled.ts';
import NavBar from './componets/NavBar/NavBar.tsx';
import SliderImg from './componets/FirstPage/Slider/SliderImg/SliderImg.tsx';

const App = () => {
 const Slides: string[] = [
"/images/slider/buffler.jpg",
"/images/slider/frapp.jpg",
"/images/slider/social_slider.jpg",
 ]

  return (
    
    <AppStyled >
    <NavBar/>
    <SliderImg slides = {Slides}/>
    </AppStyled>
    
  );      
};

export default App
