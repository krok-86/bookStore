import { NewRealisesItem } from "../../../constants";
import Button from "../Button/Button";
import GoodBlockStyled from "./GoodBlockStyled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const GoodBlock = () => {

    return (
        <GoodBlockStyled>
            <div className="NewReliasesItem">
                {NewRealisesItem.map((item) => (
                    <div className="NewRealisesBlock">
                        <img className="NewRealisesPicture" src={item.picture} />
                        <div className="NewRealisesLikeWrap">
                            <FavoriteBorderIcon className="NewRealisesLike"></FavoriteBorderIcon>
                        </div>
                        <div className="NewRealisesText">{item.text}</div>
                        <div className="NewRealisesPrice">{item.price}₽</div>
                        <Button></Button>
                    </div>
                ))}
            </div>
        </ GoodBlockStyled>
    )
}

export default GoodBlock;
