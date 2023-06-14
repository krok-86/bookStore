import { FC, useState } from "react";
import ToggleMenuStyled from "./ToggleMenuStyled";
import MenuIcon from "@mui/icons-material/Menu";
import { IItem } from "../NavBar";
import CloseIcon from '@mui/icons-material/Close';
import { goods } from "../../../../constants";

interface IToggleMenu {
    items: IItem[];
    // header: string,
    active: boolean;
    changeMenuActive: () => void;
}
const ToggleMenu: FC<IToggleMenu> = ({ items, active, changeMenuActive }) => {
    const [selectedGroup, setSelectedGroup] = useState<string>('');
// console.log(group)
const selectedSubGruop = goods.reduce(function(acc: string[],curent){
    if(!acc.includes(curent.subgroup)){
        if (curent.group===selectedGroup){
            acc.push(curent.subgroup)
        }
        }
        return acc
},[])

    const goodsReduce = goods.reduce(function(acc: string[],curent){
        if(!acc.includes(curent.group)){
        acc.push(curent.group)
        }
        return acc
        },[])
       
        const goodsReduceLevel = goods.reduce(function(acc: string[],curent){
            if(!acc.includes(curent.subgroup)){
            acc.push(curent.subgroup)
            }
            return acc
            },[])
            
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
                                {goodsReduce.map((item) => (
                                    <li onMouseEnter={() => setSelectedGroup(item)}>
                                        <a>{item}</a>
                                    </li>
                                ))}
                            </ul>
                            {/* <ul>
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.href}>{item.value}</a>
                                    </li>
                                ))}
                            </ul> */}
                        </div>
                        <div className="MenuBranchRight">
                            <ul>
                                {selectedSubGruop.map((item, index) => (
                                    <li key={index}>
                                        <a>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="MenuClose" onClick={changeMenuActive}><CloseIcon /></div>
                    </div>
                </div>
            </div>
        </ToggleMenuStyled>
    );
};
export default ToggleMenu;
