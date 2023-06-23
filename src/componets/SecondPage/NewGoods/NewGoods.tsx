import Footer from "../../FirstPage/Footer/Footer";
import NavBar from "../../FirstPage/NavBar/NavBar";
import GoodBlock from "../../commoneComponents/GoodBlock/GoodBlock";
import NewGoodsStyled from "./NewGoodsStyled";
import SortBlock from "./SortBlock/SortBlock";


const NewGoods = () => {
  return (
    <>
      <NavBar />
      <NewGoodsStyled>
        <div className="NewGoods">
        <h1>
          <b>Новинки</b>
        </h1>
        <div className="SortMenu">
          <div className="Goods">
            <p>
              <b>Тип товаров</b>
            </p>
            <ul>
              <li>Спиннинги</li>
              <li>Катушки</li>
              <li>Приманки</li>
            </ul>
          </div>
          <div className="SortBlock">
            <div className="SortBlockButton">
            <SortBlock />            
            </div>
            <GoodBlock /> <GoodBlock />
            <GoodBlock />
          </div>
        </div>
        </div>        
      </NewGoodsStyled>
      <Footer />
    </>
  );
};

export default NewGoods;
