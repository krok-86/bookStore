import { useState } from "react";
import BasketStyled from "./BasketStyled";
import SelectedGoods from "../../commoneComponents/SelectedGoods/SelectedGoods";

const Basket = () => {
  const [count, setCount] = useState(1);
  const delBasket:string[] = "Удалить из корзины"
  const decreaseCounter = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };
  return (
    <BasketStyled>
      <>
        <div className="Include">Содержимое заказа</div>
        <div className="Accessible">Доступные для заказа товары</div>
        <div className="Basket">
          <SelectedGoods titleDel={delBasket}/>
          <div className="Price">
            <div className="PriceNumber">42941 ₽</div>
            <div className="PriceButton">
              <div className="PriceSign" onClick={decreaseCounter}>
                -
              </div>
              <div className="PriceQuantity">{count}</div>
              <div className="PriceSign" onClick={() => setCount(count + 1)}>
                +
              </div>
            </div>
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
              Оформить заказ(проверить регистрацию)
            </div>
          </div>
        </div>
      </>
    </BasketStyled>
  );
};

export default Basket;
