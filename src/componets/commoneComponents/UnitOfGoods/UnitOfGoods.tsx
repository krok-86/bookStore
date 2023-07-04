import { useState } from "react";
import Button from "../Button/Button";
import UnitOfGoodsStyled from "./UnitOfGoodsStyled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const UnitOfGoods = () => {
   const item = {
        id: 1,
        name: 'Z NJZ702MLFS-AR',
        company: 'Daiwa',
        collection: 'Ninja',
        group: 'Удилища',
        subgroup:'Спиннинг',
        description: 'Описание, тест',
        img: '/images/goods/spinnings/Branzino EX AGS 99I-LH.webp',      
        price: 8400,
      }
    const [imgActive, setImgActive] = useState<boolean>(false);
    const changeImgActive = () => {
      setImgActive(!imgActive)
    }
    const advan = [
        {
            value: "295₽",
            class: "UnitPrice"
        },
        {
            value: "100% качество товара",
            class: "UnitBlockText",
        },
        {
            value: "Гарантия лучшей цены",
            class: "UnitBlockText",
        },
        {
            value: "Доставка со склада в Москве",
            class: "UnitBlockText",
        },
        {
            value: "Безопасная онлайн оплата",
            class: "UnitBlockText",
        },
    ]
    const title = `${item.subgroup} ${item.company} ${item.name}`
    return (
        <UnitOfGoodsStyled>
            <div className="UnitHeader">
                <h1 className="UnitText"><b>
                    {title}
                </b></h1>
                <div className="UnitDiscriptionBlock">

                <img className="UnitPicture" onClick={changeImgActive} src='/images/goods/spinnings/Branzino EX AGS 99I-LH.webp' />
                 
                    
                    <div className="UnitBlock">
                        <p className="UnitProperty"><b>Характеристики</b></p>
                        <div className="UnitTable">
                            <div className="UnitItem">Длина,см
                                <div>295</div>
                            </div>
                            <div className="UnitItem">Тест,г
                                <div>10 - 50</div>
                            </div>
                            <div className="UnitItem">Вес,г
                                <div>152</div>
                            </div>
                            <div className="UnitItem">Строй
                                <div>Fast</div>
                            </div>
                        </div>
                    </div>
                    <div className="UnitAdvan">
                        {advan.map((item, index) => (
                            <div className={item.class} key={index}>{item.value}
                            </div>
                        ))}
                        <Button />
                        <div className="UnitAdd">
                            <FavoriteBorderIcon className="GoodsLike" />
                            Добавить в избранное</div>
                    </div>
                </div>
            </div>
        </UnitOfGoodsStyled>
    )
}
export default UnitOfGoods;