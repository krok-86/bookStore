import NavBarStyled from './NavBarStyled';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const navItemes = ["О Компании", "Новости", "Доставка", "Оплата", "Контакты", "Статьи", "Отзывы покупателей",] // make array of objects with links (add links to router)

    const adressTitle = [
        {
            class: "Info-Text",
            value: 'Адрес шоу-рума (все товары в наличии)',
        },
        {
            class: "Info-Text Info-Texts--white",
            value: 'Москва, Большая Серпуховская, д. 46, стр. 34',
        },
        {
            class: "DrivingDirections",
            value: 'Как проехать или дойти?',
        },
        {
            class: "Info-Text",
            value: 'Время работы',
        },
        {
            class: "Info-Text Info-Texts--white",
            value: 'Ежедневно c 10:00 до 21:00',
        }
    ];
    const phoneTitle = [
        {
            class: "PhonesContacts",
            value: "Контактные телефоны",
        },
        {
            class: "PhonesCity",
            value: "Москва: +7(495)999-99-99",
        },
        {
            class: "PhonesCity",
            value: "Россия: 8(800)999-99-99(бесплатный)",
        },
        {
            class: "PhonesContacts",
            value: "Месенджеры для звонков из других стран:",
        },
        {
            class: "PhonesCity",
            value: "+7(926)999-99-99",
        },
    ];

    const socialNetwork = [
        {
            class: 'YouTube',
            url: 'https://www.youtube.com/@donfishka6772/videos',
            picture: '/images/YouTube.png',
        },
        {
            class: 'VK',
            url: 'https://vk.com/feed',
            picture: '/images/VK.png',
        },
        {
            class: 'OK',
            url: 'https://ok.ru/',
            picture: '/images/OK.png',
        },
    ]
const infoMenu = [
"Новинки",
"Бренды",
"Распродажа",
]


    return (
        <NavBarStyled>
            <nav className='NavButtons'>
						<Link to={'/about'}>dfgdfg</Link>
                {navItemes.map((item) => {
                    return (
                        <div className='NavButtonsTitle'>{item}</div>)
                })}
            </nav>
            <div className="Info">
                <img className="Logo" src='/images/logo.png' />

                <div className="AddressTitle">
                    {adressTitle.map((item) => (
                        <div className={item.class}>{item.value}</div>
                    ))}
                </div>

                <div className="PhonesTitle">
                    {phoneTitle.map((item) => (
                        <div className={item.class}>{item.value}</div>
                    ))}
                </div>

                <div className="SocialMedia">
                    <div className="SocialMediaTraking">Следите за нами в социальных сетях:</div>
                    <div className="SocialMediaAll">
                        {socialNetwork.map((item) => (
                            <a href={item.url}>
                                <img className={item.class} src={item.picture} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="Products">
                <button className="ProductsCatalog">Каталог товаров</button>
                <div className="SearchInput">
                    <input className="ProductSearch" value={"Название или артикул товара"}></input>
                    <button className="ProductSearchButton">
                        <SearchIcon className="MagnifyingGlass" />
                    </button>
                </div>
                <div>
                    <button className="ProductsFavorites">
                        <Badge className="ProductsFavoritesBadge" color="primary" badgeContent={4}
												sx={{
													"& .MuiBadge-badge": {
													color: "lightgreen",
													backgroundColor: "red"
													}
												}}
												>
                            <FavoriteBorderIcon className="ProductsFavoritesIkon" />
                        </Badge>
                        <div className="ProductsFavoritesCounter">Избранное</div>
                    </button>
                </div>
                <div>
                    <button className="ProductsFavorites">
                        <Badge 
                            className="ProductsFavoritesBadge" 
                           color = "primary"   badgeContent={2}
															sx={{
																"& .MuiBadge-badge": {
																color: "lightgreen",
																backgroundColor: "red"
																}
															}}
                        >
                            <ShoppingCartIcon className="ProductsFavoritesIkon" />
                        </Badge>
                        <div className="ProductsFavoritesCounter">Корзина</div>
                    </button>
                </div>
                <div className="PersonalInformation">
                    <button className="Personal">Личный кабинет</button>
                    <button className="Registration">Регистрация</button>
                </div>
            </div>
<div className = "NavInfo">
{infoMenu.map((item) => {
	return (
		<div className = "NavButtonsTitle">{item}</div>
	)
})}
</div>
        </NavBarStyled>

    );
};

export default NavBar;