import { FC, useState } from "react";
import SelectedGoodsStyled from "./SelectedGoodsStyled";

interface ISelectedGoods {
    titleDel: string;
}

const SelectedGoods:FC<ISelectedGoods> = ({titleDel,emptyTitle}) => {
    const [openImg, setOpenImg] = useState(false);
    const [delGoods, setDelGoods] = useState(true);
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
                    <div className="SelectedGoodsDelete" emptyTitle={emptyTitle} onClick={() => setDelGoods(!delGoods)} >{titleDel}</div>
                </div>
            </div>
        </SelectedGoodsStyled>
    )
}
export default SelectedGoods;