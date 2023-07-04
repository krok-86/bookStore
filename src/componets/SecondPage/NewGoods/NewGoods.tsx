import { goods } from "../../../constants";
import GoodBlock from "../../commoneComponents/GoodBlock/GoodBlock";
import NewGoodsStyled from "./NewGoodsStyled";
import SortBlock from "./SortBlock/SortBlock";

const NewGoods = () => {
  const goodsSubgroup = goods.reduce ((acc, elem)=>acc.add(elem.subgroup),new Set())
    console.log(goodsSubgroup);
  return (
    <NewGoodsStyled>
      <div className="NewGoods">
        <h1>
          <b>Новинки</b>
        </h1>
        <div className="SortMenu">
          <div className="Goods">
            <p>
              <b>Тип товаров</b>
            </p>
            <ul>
              <li>{goodsSubgroup}</li>             
            </ul>
          </div>
          <div className="SortBlock">
            <div className="SortBlockButton">
              <SortBlock />
            </div>
            <GoodBlock /> <GoodBlock />
            <GoodBlock />
          </div>
        </div>
      </div>
    </NewGoodsStyled>
  );
};

export default NewGoods;
