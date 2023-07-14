import BasketStyled from "./BasketStyled";
import SelectedGoods from "../../commoneComponents/SelectedGoods/SelectedGoods";
import PriceBlock from "../../commoneComponents/PriceBlock/PriceBlock";
import TotalPriceBlock from "../../commoneComponents/GoodCommon/TotalPriceBlock/TotalPriceBlock";


const Basket = () => {
  const delBasket = "Удалить из корзины"
  const emptyTitle = "Ваша корзина еще пуста"
  return (
    <BasketStyled>
      <>
        <div className="Include">Содержимое заказа</div>
        <div className="Accessible">Доступные для заказа товары</div>
        <div className="Basket">
          <SelectedGoods titleDel={delBasket} emptyTitle={emptyTitle}/>
          <PriceBlock />
          <TotalPriceBlock />
         

        </div>
      </>
    </BasketStyled>
  );
};

export default Basket;
