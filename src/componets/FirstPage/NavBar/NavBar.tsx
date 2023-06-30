import NavBarStyled from "./NavBarStyled";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import ToggleMenu from "./ToggleMenu/ToggleMenu";
import { useState } from "react";
import { adressTitle, infoMenu, items, navItemes, phoneTitle, socialNetwork } from "../../../constants";

const NavBar = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const changeMenuActive = () => {
    setMenuActive(!menuActive)
  }

  return (
    <NavBarStyled>
      <div className="NavButtonBlock">
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
      </div>
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
            changeMenuActive={changeMenuActive} items={[]}            //   header={"Каталог товаров"}
            // items={items}
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
                    color: "white",
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
                    color: "white",
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
