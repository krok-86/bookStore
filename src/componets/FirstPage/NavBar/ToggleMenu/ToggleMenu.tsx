import { FC, useState } from "react";
import ToggleMenuStyled from "./ToggleMenuStyled";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import { CategoriesEnum, goods } from "../../../../constants";
import { IItem } from "../../../../interface";
import { Link } from "react-router-dom";

interface IToggleMenu {
    items: IItem[];
    // header: string,
    active: boolean;
    changeMenuActive: () => void;
}
const ToggleMenu: FC<IToggleMenu> = ({ active, changeMenuActive }) => {
    const [selectedGroup, setSelectedGroup] = useState<string>('');
    // console.log(group)
    const selectedSubGruop = goods.reduce(function (acc: string[], curent) {
        if (!acc.includes(curent.subgroup)) {
            if (curent.group === selectedGroup) {
                acc.push(curent.subgroup)
            }
        }
        return acc
    }, [])

    const goodsReduce = goods.reduce(function (acc: string[], curent) {
        if (!acc.includes(curent.group)) {
            acc.push(curent.group)
        }
        return acc
    }, [])

    // const goodsReduceLevel = goods.reduce(function(acc: string[],curent){
    //     if(!acc.includes(curent.subgroup)){
    //     acc.push(curent.subgroup)
    //     }
    //     return acc
    //     },[])

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
                                {goodsReduce.map((item, index) => (
                                    <li key={index} onMouseEnter={() => setSelectedGroup(item)}>
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
                                {selectedSubGruop.map((item, index) => {
                                    // @ts-ignore
                                    const subGroup = Object.keys(CategoriesEnum).find(key => CategoriesEnum[key] === item);
                                    // @ts-ignore
                                    const group = Object.keys(CategoriesEnum).find(key => CategoriesEnum[key] === selectedGroup);
                                    return (
                                        <li key={index}>
                                            <Link to={`/${group}/${subGroup}`}>{item}</Link>
                                        </li>
                                    )
                                })}
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
