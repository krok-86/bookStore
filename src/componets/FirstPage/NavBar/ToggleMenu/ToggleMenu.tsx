import { FC } from "react";
import ToggleMenuStyled from "./ToggleMenuStyled";
import MenuIcon from "@mui/icons-material/Menu";
import { IItem } from "../NavBar";
import CloseIcon from '@mui/icons-material/Close';

interface IToggleMenu {
  items: IItem[];
  // header: string,
  active: boolean;
  changeMenuActive: () => void;
}
const ToggleMenu: FC<IToggleMenu> = ({ items, active, changeMenuActive }) => {
  
  return (
    <ToggleMenuStyled isActive={active}>
      <button className="ProductsCatalog" onClick={changeMenuActive}>
        <MenuIcon />
        Каталог товаров
      </button>

      <div className="Menu">
        <div className="Menu">
          <div className="MenuContent">
            <div className="MenuBranchLeft">
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.value}</a>
                </li>
              ))}
            </ul>
            </div>
            <div className="MenuBranchRight">
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item.value}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="MenuClose" onClick={changeMenuActive}><CloseIcon/></div>
          </div>
        </div>
      </div>
    </ToggleMenuStyled>
  );
};
export default ToggleMenu;
