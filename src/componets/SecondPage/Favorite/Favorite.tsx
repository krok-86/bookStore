import TotalPriceBlock from "../../commoneComponents/GoodCommon/TotalPriceBlock/TotalPriceBlock";
import SelectedGoods from "../../commoneComponents/SelectedGoods/SelectedGoods";
import FavoriteStyled from "./FavoriteStyled";

const Favorite = () => {
  const delFavorite = "Удалить из избранного";
  const emptyTitle = "Список избранных товаров пока еще пуст"
  const titleButton = "Купить";
  return (
    <FavoriteStyled>
      <div>
        <div className="Include">Избранные товары</div>
        <div className="Accessible">Доступные для заказа товары</div>
        <div className="Favorite">
        <SelectedGoods titleDel={delFavorite} emptyTitle={emptyTitle}/>
        <TotalPriceBlock titleButton={titleButton}/>        
      </div>
      </div>
    </FavoriteStyled>
  );
};

export default Favorite;
