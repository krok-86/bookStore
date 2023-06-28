import Footer from "../../FirstPage/Footer/Footer";
import NavBar from "../../FirstPage/NavBar/NavBar";
import Button from "../Button/Button";
import UnitOfGoodsStyled from "./UnitOfGoodsStyled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const UnitOfGoods = () => {
const advan = [
    "100% качество товара",
    "Гарантия лучшей цены",
    "Доставка со склада в Москве",
    "Безопасная онлайн оплата",
]
    return (
        <>
            <NavBar />
            <UnitOfGoodsStyled>
                <div className="UnitHeader">
                    <div>
                        <h1 className="UnitText"><b>
                            Спиннинг Daiwa 22 Morethan Branzino EX AGS 98M/MH, 295 см, 10-50 г
                        </b></h1>
                        <div className="UnitDiscriptionBlock">
                            <img className="UnitPicture" src='/images/goods/spinnings/Branzino EX AGS 99I-LH.webp' />
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
                            <div className="UnitPrice">259₽</div>
                            {advan.map((item,index) => (
                    <div className="GoodsArea" key={index}>{item}</div>))}
                        <Button />
                        <div><FavoriteBorderIcon className="GoodsLike"></FavoriteBorderIcon>
                            Добавить в избранное</div>
                        </div>                        
                        </div>
                    </div>
                </div>
            </UnitOfGoodsStyled>
            <Footer />
        </>
    )
}
export default UnitOfGoods;