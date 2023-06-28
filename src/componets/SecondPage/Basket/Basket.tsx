import { useState } from "react";
import BasketStyled from "./BasketStyled";

const Basket = () => {
  const [count, setCount] = useState(0);
  const decreaseCounter = () => {
    if (count !== 0) {
      setCount(count - 1);
    }
  };
  return (
    <BasketStyled>
      <div>
        <div className="Include">Содержимое заказа</div>
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
            <div className="BasketItemDelete">Удалить из корзины</div>
          </div>
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
      </div>
    </BasketStyled>
  );
};

export default Basket;
