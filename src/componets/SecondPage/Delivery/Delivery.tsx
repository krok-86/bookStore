import DeliveryStyled from "./DeliveryStyled";

const Delivery = () => {
  return (
    <DeliveryStyled>
      <h1 className="DeliveryText">
        <b>Самовывоз</b>
      </h1>
      <p>Доступен самовывоз вашего заказа у нас в офисе абсолютно бесплатно.</p>
      <p>
        Наш адрес: Москва, ул. Большая Серпуховская, д. 46/34. Мы находимся на
        2-ом этаже (вход справа от входа в магазин «Пятёрочка»), офис №5.
      </p>
    </DeliveryStyled>
  );
};
export default Delivery;
