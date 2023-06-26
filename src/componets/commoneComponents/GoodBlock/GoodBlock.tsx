import { NewRealisesItem } from "../../../constants";
import Button from "../Button/Button";
import GoodBlockStyled from "./GoodBlockStyled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const GoodBlock = () => {

    return (
        <GoodBlockStyled>
            <div className="GoodsItem">
                {NewRealisesItem.map((item) => (//нужно приявязать к другому массиву
                    <div className="GoodsArea">
                        <img className="GoodsPicture" src={item.picture} />
                        <div className="GoodsLikeWrap">
                            <FavoriteBorderIcon className="GoodsLike"></FavoriteBorderIcon>
                        </div>
                        <div className="GoodsText">{item.text}</div>
                        <div className="GoodsPrice">{item.price}₽</div>
                        <Button></Button>
                    </div>
                ))}
            </div>
        </ GoodBlockStyled>
    )
}

export default GoodBlock;
