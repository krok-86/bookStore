import { goods } from "../../../constants";
import GoodBlock from "../../commoneComponents/GoodBlock/GoodBlock";
import NewGoodsStyled from "./NewGoodsStyled";
import SortBlock from "./SortBlock/SortBlock";

const NewGoods = () => {
  const goodsSubgroup = [... new Set(goods.map((item) => item.subgroup))]
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
             {goodsSubgroup.map((item) => (
            <li>
            <a className="">{item}</a>
            </li>
        ))}
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
