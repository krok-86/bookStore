import { useState } from "react";
import SelectedGoodsStyled from "./SelectedGoodsStyled";


const SelectedGoods = ({titleDel}) => {
    const [openImg, setOpenImg] = useState(false);
    
    return (
        <SelectedGoodsStyled>
            <div className="SelectedGoodsItem">
                <img
                    className="SelectedGoodsPicture"
                    onClick={() => setOpenImg(!openImg)}
                    src="/images/newReliases/спиннинг.jpg"
                />
                {openImg && (
                    <img className="SelectedGoodsShowPicture"
                        src="/images/newReliases/спиннинг.jpg"
                        onClick={() => setOpenImg(!openImg)}
                    />
                )}
                <div className="SelectedGoodsItemBlock">
                    <div className="SelectedGoodsDiscription">
                        Спиннинг Daiwa 20 Emeraldas Air AGS 83M, 251 см, 7-32 г
                    </div>
                    <div className="SelectedGoodsDelete">{titleDel}</div>
                </div>
            </div>
        </SelectedGoodsStyled>
    )
}
export default SelectedGoods;