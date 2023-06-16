import Footer from "../../FirstPage/Footer/Footer"
import NavBar from "../../FirstPage/NavBar/NavBar"
import BasketStyled from "./BasketStyled"

const Basket = () => {

    return(
        <>        
        <NavBar/>
        <BasketStyled>
<div>
    {/* <div className="Empty">Ваша корзина еще пуста</div> */}
    <div className="Include">Содержимое заказа</div>
    <div className="Accessible">Доступные для заказа товары</div>
    <div className="BasketItem">
        <img className="BasketItemPicture" src = "/images/newReliases/спиннинг.jpg"/>
        <div className="BasketItemBlock">
        <div className="BasketItemDiscription">Спиннинг Daiwa 20 Emeraldas Air AGS 83M, 251 см, 7-32 г</div>
        <div className="BasketItemDelete">Удалить из корзины</div>
        </div>
    </div>
    <div className="Price">
<div className="PriceNumber"></div>
<div>
    <div></div>
    <div></div>
    <div></div> 
</div>
    </div>
</div>
        </BasketStyled>
        <Footer/>
        </>
    )
}

export default Basket;