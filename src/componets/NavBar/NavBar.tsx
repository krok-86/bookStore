import NavBarStyled from './NavBarStyled';


const NavBar = () => {

const navItemes = ["О Компании","Новости","Доставка","Оплата","Контакты","Статьи","Отзывы покупателей",]

    return (
        <NavBarStyled>
            <nav className='NavButtons'>
        {navItemes.map((item) => {
    return (
         <div>{item}</div>)
})}
</nav>
<div className = "Info">
<img className = "Logo" src = '/images/logo.png'/>
<div className = "ShowRoom">Адрес шоу-рума (все товары в наличии):
Москва, Большая Серпуховская, д. 46, стр. 34</div>
<button className = "DrivingDirections">Как проехать или дойти?</button>
<div className="WorkTime">Время работы:</div>
<div className="Daily">Ежедневно c 10:00 до 21:00</div>
</div>

        </NavBarStyled>
    );
};

export default NavBar;