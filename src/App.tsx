import AppStyled from './AppStyled.ts';
import NavBar from './componets/FirstPage/NavBar/NavBar.tsx';
import SliderImg from './componets/FirstPage/Slider/SliderImg/SliderImg.tsx';
import Description from './componets/FirstPage/Description/Description.tsx';
import Footer from './componets/FirstPage/Footer/Footer.tsx';
import GoodBlock from './componets/commoneComponents/GoodBlock/GoodBlock.tsx';


const App = () => {

  return (
    <AppStyled >
      <NavBar />
      <SliderImg />
      <GoodBlock />
      <Description />
      <Footer />
    </AppStyled>
  );
};

export default App;
