import NavBarStyled from './NavBarStyled';


const NavBar = () => {

    const navItemes = ["О Компании", "Новости", "Доставка", "Оплата", "Контакты", "Статьи", "Отзывы покупателей",]



    return (
        <NavBarStyled>
            <nav className='NavButtons'>
                {navItemes.map((item) => {
                    return (
                        <div>{item}</div>)
                })}
            </nav>
            <div className="Info">
                <img className="Logo" src='/images/logo.png' />

                <div className="AddressTitle">
                    <div className="ShowRoom">Адрес шоу-рума (все товары в наличии):</div>
                    <div className="ShowRoomAddress">Москва, Большая Серпуховская, д. 46, стр. 34</div>
                    <button className="DrivingDirections">Как проехать или дойти?</button>
                    <div className="WorkTime">Время работы:</div>
                    <div className="Daily">Ежедневно c 10:00 до 21:00</div>
                </div>

                <div className="Phones">
                    <div className="PhonesContacts">Контактные телефоны</div>
                    <div className="PhonesCity">Москва: +7(495)999-99-99</div>
                    <div className="PhonesCountry">Россия: 8(800)999-99-99(бесплатный)</div>
                    <div className="PhonesMessengers">Месенджеры для звонков из других стран:</div>
                    <div className="PhonesNumber">+7(926)999-99-99</div>
                </div>

                <div className="SocialMedia">
                    <div className="SocialMediaTraking">Следите за нами в социальных сетях:</div>
                    <div className="SocialMediaAll">
                        <a href='https://www.youtube.com/@donfishka6772/videos'>
                            <img className="YouTube" src='/images/YouTube.png' />
                        </a>
                        <a href='https://vk.com/feed'>
                            <img className="VK" src='/images/VK.png' />
                        </a>
                        <a href='https://ok.ru/'>
                            <img className="OK" src='/images/OK.png' />
                        </a>
                    </div>
                </div>
            </div>
            <div className = "Products">
<button className = "ProductsCatalog">Каталог товаров</button>
<div>
<button className = "ProductSearchButton">
<input className = "ProductSearch" value={"Название или артикул товара"}></input>
</button>
</div>
<div>
    <button className = "ProductsFavorites">Избранное</button>
    <div className = "ProductsFavoritesCounter"></div>
</div>
<div>
    <button className = "ProductsBasket">Корзина</button>
    <div className = "ProductsBasketCounter"></div>
</div>
<div className = "PersonalInformation">
    <button className = "Personal">Личный кабинет</button>
    <button className = "Registration">Регистрация</button>
</div>
            </div>

        </NavBarStyled>
    );
};

export default NavBar;