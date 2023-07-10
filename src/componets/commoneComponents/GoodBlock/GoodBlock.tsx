/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useParams } from "react-router-dom";
import { Categoriesenam, goods } from "../../../constants";
import Button from "../Button/Button";
import GoodBlockStyled from "./GoodBlockStyled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useEffect, useState } from "react";

const GoodBlock = () => {
  const buttonText = "купить";
  const { subcategory } = useParams();
//   console.log(subcategory);

  const [filterGoods, setFilterGoods] = useState(goods);

  useEffect(() => {
    if (!subcategory) return;
    const filtGoods = goods.filter(
        //@ts-ignore
      (item) => item.subgroup === Categoriesenam[subcategory]
    );
    setFilterGoods(filtGoods);
  }, [subcategory]);

  return (
    <GoodBlockStyled>
      <div className="GoodsItem">
    {/* обернуть в Линк и прописать дин путь к юнит */}
        {filterGoods.map((item) => (
          <div className="GoodsArea">
            <img className="GoodsPicture" src={item.img} />
            <div className="GoodsLikeWrap">
              <FavoriteBorderIcon className="GoodsLike"></FavoriteBorderIcon>
            </div>
            <div className="GoodsText">
              {item.subgroup}
              <div>{item.company}</div>
              <div>{item.collection}</div>
              <div>{item.name}</div>
            </div>
            <div className="GoodsPrice">{item.price}₽</div>
            <Button nameButton={buttonText} />
          </div>
        ))}
      </div>
    </GoodBlockStyled>
  );
};

export default GoodBlock;
