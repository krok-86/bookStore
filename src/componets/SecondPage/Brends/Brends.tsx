import { goods } from "../../../constants";
import BrandsStyled from "./BrendsStyled";

const Brands = () => {
    return (
        <BrandsStyled>
<div className="BrandsHeader"><b>Бренды</b></div>
{goods.map((item) => (
    <div className="BrandsName">{item.company}</div>
    ))}
        </BrandsStyled>
    )
}
export default Brands;