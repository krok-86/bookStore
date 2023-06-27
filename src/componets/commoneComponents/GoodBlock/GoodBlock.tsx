import { goods } from "../../../constants";
import Button from "../Button/Button";
import GoodBlockStyled from "./GoodBlockStyled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const GoodBlock = () => {

    return (
        <GoodBlockStyled>
            <div className="GoodsItem">
                {goods.map((item) => (
                    <div className="GoodsArea">
                        <img className="GoodsPicture" src={item.img} />
                        <div className="GoodsLikeWrap">
                            <FavoriteBorderIcon className="GoodsLike"></FavoriteBorderIcon>
                        </div>
                        <div className="GoodsText">{item.subgroup}
                        <div>{item.company}</div>
                        <div>{item.collection}</div>
                        <div>{item.name}</div>
                        </div>
                        <div className="GoodsPrice">{item.price}₽</div>
                        <Button></Button>
                    </div>
                ))}
            </div>
        </ GoodBlockStyled>
    )
}

export default GoodBlock;
