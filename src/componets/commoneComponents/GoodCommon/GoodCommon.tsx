import { FC } from "react";
import { goods } from "../../../constants";
import GoodBlock from "../GoodBlock/GoodBlock";
import NewGoodsStyled from "./GoodCommonStyled";
import SortBlock from "./SortBlock/SortBlock";

interface INewGoods {
  isSale?: boolean;
}

const NewGoods:FC<INewGoods> = ({isSale}) => {
  const goodsSubgroup = [... new Set(goods.map((item) => item.subgroup))];
    const title = isSale ? "Распродажа" : "Новинки"
  return (
    <NewGoodsStyled>
      <div className="NewGoods">
        <h1>
          <b>{title}</b>
        </h1>
        <div className="SortMenu">
          <div className="Goods">
            <p>
              <b>Тип товаров</b>
            </p>
            <ul>
             {goodsSubgroup.map((item,index) => (
            <li>
            <a key={index}>{item}</a>
            </li>
        ))}
</ul> 
          </div>
          <div className="SortBlock">
            <div className="SortBlockButton">
              <SortBlock />
            </div>
            <GoodBlock />             
          </div>
        </div>
      </div>
    </NewGoodsStyled>
  );
};

export default NewGoods;
