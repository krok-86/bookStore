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
        subgroup: 'Спиннинг',
        description: 'Описание, тест',
        img: '/images/goods/spinnings/Branzino EX AGS 99I-LH.webp',
        price: 8400,
    }
    const advan = [
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
    const specifications = [
        {
            class: "UnitItem",
            value:
            {
                property: "Длина,см",
                mean: "295",
            }
            ,
        },
        {
            class: "UnitItem",
            value:
            {
                property: "Тест,г",
                mean: "10 - 50",
            }
            ,
        },
        {
            class: "UnitItem",
            value:
            {
                property: "Вес,г",
                mean: "152",
            }
            ,
        },
        {
            class: "UnitItem",
            value:
            {
                property: "Строй",
                mean: "Fast",
            },
        },
    ]
    const title = `${item.subgroup} ${item.company} ${item.name}`
    const price = `${item.price}`
    return (
        <UnitOfGoodsStyled>
            <div className="UnitHeader">
                <h1 className="UnitText"><b>
                    {title}
                </b></h1>
                <div className="UnitDiscriptionBlock">
                    <img className="UnitPicture" src={item.img} />
                    <div className="UnitBlock">
                        <p className="UnitProperty"><b>Характеристики</b></p>
                        <div className="UnitTable">
                            {specifications.map((item, index) => (
                                <div className={item.class} key={index}>{item.value.property}
                                    <div>{item.value.mean}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="UnitAdvan">
                        <div className="UnitPrice">
                            {price}₽
                        </div>
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