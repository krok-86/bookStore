import SelectedGoods from "../../commoneComponents/SelectedGoods/SelectedGoods";
import FavoriteStyled from "./FavoriteStyled";

const Favorite = () => {
  const delFavorite = "Удалить из избранного"
  return (
    <FavoriteStyled>
      <div>
        <div className="Include">Избранные товары</div>
        <div className="Accessible">Доступные для заказа товары</div>
        <div className="Favorite">
        <SelectedGoods titleDel={delFavorite}/>
        <div className="Total">
          <div className="TotalBlock">
            <div className="TotalText">Товары</div>
            <div className="TotalText">42941 ₽</div>
          </div>
          <div className="TotalBlock">
            <div className="TotalText">Итого</div>
            <div className="TotalText">42941 ₽</div>
          </div>
          <div className="TotalButton">Купить</div>
        </div>
      </div>
      </div>
    </FavoriteStyled>
  );
};

export default Favorite;
