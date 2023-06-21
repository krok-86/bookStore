import Footer from "../../FirstPage/Footer/Footer";
import NavBar from "../../FirstPage/NavBar/NavBar";
import NewGoodsStyled from "./NewGoodsStyled";

const NewGoods = () => {
  return (
    <>
      <NavBar />
      <NewGoodsStyled>
        <p>
          <b>Новинки</b>
        </p>
      </NewGoodsStyled>
      <Footer />
    </>
  );
};

export default NewGoods;
