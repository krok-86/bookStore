// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import AppStyled from './AppStyled.ts';
import NavBar from './componets/FirstPage/NavBar/NavBar.tsx';
import SliderImg from './componets/FirstPage/Slider/SliderImg/SliderImg.tsx';
import NewRelises from './componets/FirstPage/NewRelises/NewRelises.tsx';
import Description from './componets/FirstPage/Description/Description.tsx';
import Footer from './componets/FirstPage/Footer/Footer.tsx';

const App = () => {

  return (
    <AppStyled >
      <NavBar />
      <SliderImg />
      <NewRelises />
      <Description />
      <Footer />
    </AppStyled>
  );
};

export default App;
