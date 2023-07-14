import Button from "../../Button/Button";
import TotalPriceBlockStyled from "./TotalPriceBlockStyled";

const totalTitle = [
    {
        title: "Товары",
        price: 3213,
        class: "TotalTitle",
    }
]
const TotalPriceBlock = (titleButton) => {
    const titleButton = "Оформить заказ"
    return (
        <TotalPriceBlockStyled>
            <div className="Total">
                <div className="TotalBlock">
                    {totalTitle.map((item) => (
                        <div className="TotalText">
                            <div className={item.class}>{item.title}</div>
                            <div className={item.class}>{item.price}₽</div>
                        </div>
                    ))}
                </div>
                <Button nameButton={titleButton} titleButton={nameButton} />

            </div>
        </TotalPriceBlockStyled>
    )
}
export default TotalPriceBlock;