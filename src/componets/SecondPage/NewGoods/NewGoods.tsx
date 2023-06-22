import { NewRealisesItem } from "../../../constants";
import Footer from "../../FirstPage/Footer/Footer";
import NavBar from "../../FirstPage/NavBar/NavBar";
import NewGoodsStyled from "./NewGoodsStyled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const NewGoods = () => {

  return (
    <>
      <NavBar />
      <NewGoodsStyled>
        <h1>
          <b>Новинки</b>
        </h1>
        <div className="SortMenu">
          <div className="Goods">
            <p><b>Тип товаров</b></p>
            <ul>
              <li>Спиннинги</li>
              <li>Катушки</li>
              <li>Приманки</li>
            </ul>
          </div>
          <div className="SortBlock">
            <div className="Sort">
              <div className="">Показывать:</div>
              <div className="Show">По названию</div>
              <div className="Show">По цене</div>
            </div>
            <div className="Sort">
              <div className="">Показывать:</div>
              <div className="Show">Все товары</div>
              <div className="Show">в наличии</div>
            </div>


            <div className="NewReliasesItem">
        {NewRealisesItem.map((item) => (
          <div className="NewRealisesBlock">
            <img className="NewRealisesPicture" src={item.picture} />
            <div className="NewRealisesLikeWrap">
              <FavoriteBorderIcon className="NewRealisesLike"></FavoriteBorderIcon>
            </div>
            <div className="NewRealisesText">{item.text}</div>
            <div className="NewRealisesPrice">{item.price}₽</div>
            <div className="NewRealisesButton">Купить</div>
            </div>
        ))}
      </div>

          </div>
        </div>

{/* <div className="gooodsList"> */}

        

      {/* </div> */}

      </NewGoodsStyled>
      <Footer />
    </>
  );
};

export default NewGoods;
