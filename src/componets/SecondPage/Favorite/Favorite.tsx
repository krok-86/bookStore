import Footer from "../../FirstPage/Footer/Footer";
import NavBar from "../../FirstPage/NavBar/NavBar";
import FavoriteStyled from "./FavoriteStyled";

const Favorite = () => {
  return (
    <>
      <NavBar />
      <FavoriteStyled>
        <div>
          <div className="Include">Избранные товары</div>
          <div className="Accessible">Доступные для заказа товары</div>
          <div className="BasketItem">
            <img
              className="BasketItemPicture"
              src="/images/newReliases/спиннинг.jpg"
            />
            <div className="BasketItemBlock">
              <div className="BasketItemDiscription">
                Спиннинг Daiwa 20 Emeraldas Air AGS 83M, 251 см, 7-32 г
              </div>
              <div className="BasketItemDelete">Удалить из избранного</div>
            </div>
            <div className="Total">
              <div className="TotalBlock">
                <div className="TotalText">Товары</div>
                <div className="TotalText">42941 ₽</div>
              </div>
              <div className="TotalBlock">
                <div className="TotalText">Итого</div>
                <div className="TotalText">42941 ₽</div>
              </div>
              <div className="TotalButton">
                Купить
              </div>
            </div>
          </div>          
        </div>
      </FavoriteStyled>
      <Footer />
    </>
  );
};

export default Favorite;
