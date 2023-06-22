import NavBarStyled from "./NavBarStyled";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import { useState } from "react";

export interface IItem {
  value: string;
  href: string;
}




const items: IItem[] = [
  {
    value: "Удилища",
    href: "/rods",
  },
  {
    value: "Спиннинговые",
    href: "/rods/spinning",
  },
  {
    value: "Кастинговые",
    href: "/rods/casting",
  },
  {
    value: "Фидерные",
    href: "/rods/fider",
  },
  {
    value: "Daiwa",
    href: "/rods/spinning/daiwa",
  },
  {
    value: "Спиннинги Daiwa Ninja",
    href: "/rods/spinning/ninja",
  },
  {
    value: "Спиннинг Daiwa Ninja Z NJZ702MLFS-AR, 213 см, 5-20 г",
    href: "/rods/spinning/ninja/NJZ702MLFS-AR",
  },
  {
    value: "Спиннинг Daiwa Ninja Z NJZ802MFS-AR, 244 см, 10-30 г",
    href: "/rods/spinning/ninja/NJZ702MLFS-AR",
  },
  {
    value: "Спиннинги Daiwa Ninja Спиннинг Daiwa Ninja Z NJZ802MHFS-AR, 244 см, 15-50 г",
    href: "/rods/spinning/ninja/NJZ802MHFS-AR",
  },
  {
    value: "Спиннинги Daiwa Morethan",
    href: "/rods/casting/morethan",
  },
  {
    value: "Спиннинг Daiwa 22 Morethan Branzino EX AGS 94MMH, 285 см, 12-45 г",
    href: "/rods/casting/morethan/BranzinoEXAGS94MMH",
  },
  {
    value: "Спиннинг Daiwa 22 Morethan Branzino EX AGS 98M/MH, 295 см, 10-50 г",
    href: "/rods/casting/morethan/BranzinoEXAGS98M",
  },
  {
    value: "Спиннинг Daiwa 22 Morethan Branzino EX AGS 99I/LH, 395 см, 20-50 г",
    href: "/rods/casting/morethan/BranzinoEXAGS99ILH",
  },
  {
    value: "Спиннинги Daiwa Prorex",
    href: "/rods/fider",
  },

  {
    value: "Jackall",
    href: "/rods/casting",
  },

  {
    value: "Palms",
    href: "/rods/fider",
  },
  {
    value: "Катушки",
    href: "/reels",
  },
  {
    value: "Лески и шнуры",
    href: "/lines",
  },
];

const adressTitle = [
  {
    class: "Info-Text",
    value: "Адрес шоу-рума (все товары в наличии)",
    link: "",
  },
  {
    class: "Info-Text Info-Texts--white",
    value: "Москва, Большая Серпуховская, д. 46, стр. 34",
    link: "",
  },
  {
    class: "DrivingDirections",
    value: "Как проехать или дойти?",
    link: "/contacts",
  },
  {
    class: "Info-Text",
    value: "Время работы",
    link: "",
  },
  {
    class: "Info-Text Info-Texts--white",
    value: "Ежедневно c 10:00 до 21:00",
    link: "",
  },
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
    class: "YouTube",
    url: "https://www.youtube.com/@donfishka6772/videos",
    picture: "/images/YouTube.png",
  },
  {
    class: "VK",
    url: "https://vk.com/feed",
    picture: "/images/VK.png",
  },
  {
    class: "OK",
    url: "https://ok.ru/",
    picture: "/images/OK.png",
  },
];
const infoMenu = [
  {
    value:"Новинки",
    link: "/newGoods",
  },
  {
    value:"Бренды",
    link: "/brands",
  },
  {
    value:"Распродажа",
    link: "/sale",
  },
  ];
const navItemes = [
  {
    value:"О Компании", 
    link: "/aboutCompany",
  },
  {
    value:"Доставка", 
    link: "/delivery",
  },
  {
    value:"Оплата", 
    link: "/payment",
  },
  {
    value:"Контакты", 
    link: "/contacts",
  },
  {
    value:"Статьи", 
    link: "/articles",
  },
  {
    value:"Отзывы покупателей", 
    link: "/reviews",
  },
]; // make array of objects with links (add links to router)

const NavBar = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const changeMenuActive = () => {
setMenuActive(!menuActive)
  }
  
  return (
    <NavBarStyled>
      
      <nav className="NavButtons LayoutSection">
        {navItemes.map((item, index) => {
          return (
            <div key={index} className="NavButtonsTitle">
              <Link className="NavButtonsTitle" to={item.link}>
              {item.value}
              </Link>
            </div>
          );
        })}
      </nav>

      <div className="Info-Wrapper">
      <div className="Info LayoutSection">
        {/* <img className="Logo" src="/images/logo.png" /> */}
        <Link className="Per" to={"http://127.0.0.1:5173/"}><img className="Logo" src="/images/logo.png" /></Link>
        <div className="AddressTitle">
          {adressTitle.map((item, index) => (
            <Link key={index} className={item.class} to={item.link}>
              {item.value}
            </Link>
          ))}
        </div>

        <div className="PhonesTitle">
          {phoneTitle.map((item, index) => (
            <div key={index} className={item.class}>
              {item.value}
            </div>
          ))}
        </div>

        <div className="SocialMedia">
          <div className="SocialMediaTraking">
            Следите за нами в социальных сетях:
          </div>
          <div className="SocialMediaAll">
            {socialNetwork.map((item, index) => (
              <a key={index} href={item.url}>
                <img className={item.class} src={item.picture} />
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
      <div className="Products-Wrapper">
      <div className="Products">
        <ToggleMenu
          active={menuActive}
          changeMenuActive={changeMenuActive}
        //   header={"Каталог товаров"}
          items={items}
        />
         <div className="SearchInput">
          <input
            className="ProductSearch"
            placeholder={"Название или артикул товара"}
          ></input>
          <button className="ProductSearchButton">
            <SearchIcon className="MagnifyingGlass" />
          </button>
        </div>
        <div>
          <button className="ProductsFavorites"><Link className="ProductsFavorites" to={"/favorite"}>
            <Badge
              className="ProductsFavoritesBadge"
              color="primary"
              badgeContent={4}
              sx={{
                "& .MuiBadge-badge": {
                  color: "lightgreen",
                  backgroundColor: "red",
                },
              }}
            >
              <FavoriteBorderIcon className="ProductsFavoritesIkon" />
            </Badge>
            <div className="ProductsFavoritesCounter">Избранное</div>
            </Link>
          </button>
        </div>
        <div>
          <button className="ProductsFavorites"><Link className="ProductsFavorites" to={"/basket"}>
            <Badge
              className="ProductsFavoritesBadge"
              color="primary"
              badgeContent={2}
              sx={{
                "& .MuiBadge-badge": {
                  color: "lightgreen",
                  backgroundColor: "red",
                },
              }}
            >
              <ShoppingCartIcon className="ProductsFavoritesIkon" />
            </Badge>
            <div className="ProductsFavoritesCounter">Корзина</div>
            </Link>
          </button>
        </div>
        <div className="PersonalBlock">
          <button className="Personal"><Link className="Personal" to={"/personalArea"}>Личный кабинет</Link></button>
          <div className="Registration"><Link className="Registration" to={"/registration"}>Регистрация</Link></div>
        </div>
      </div>
      </div>
      <div className='Info-Wrapper'>
      <div className="NavInfo">
        {infoMenu.map((item, index) => {
          return (
            <Link key={index} className="NavButtonsTitle" to={item.link}>
              {item.value}
            </Link>
          );
        })}
      </div>
      </div>
    </NavBarStyled>
  );
};

export default NavBar;
