/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Link, useParams } from "react-router-dom";
import {  CategoriesEnum, goods } from "../../../constants";
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
      (item) => item.subgroup ===  CategoriesEnum[subcategory]
    );
    setFilterGoods(filtGoods);
  }, [subcategory]);

  return (
    <GoodBlockStyled>            
      <div className="GoodsItem">
    {/* обернуть в Линк и прописать дин путь к юнит */}
        {/* <Link to={"`/${group}/${subGroup}`"} > */}
        {filterGoods.map((item, index) => (
          <div className="GoodsArea">
            <img className="GoodsPicture" src={item.img} />
            <div className="GoodsLikeWrap">
              <FavoriteBorderIcon className="GoodsLike"></FavoriteBorderIcon>
            </div>
            <div className="GoodsText" key={index}>              
              {item.subgroup}
              <div>{item.company}</div>
              <div>{item.collection}</div>
              <div>{item.name}</div>
            </div>
            <div className="GoodsPrice">{item.price}₽</div>
            <Button nameButton={buttonText} />
          </div>
        ))}
        {/* </Link> */}
      </div>     
    </GoodBlockStyled>
  );
};

export default GoodBlock;
