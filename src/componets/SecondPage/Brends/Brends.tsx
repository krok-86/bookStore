import { goods } from "../../../constants";
import BrandsStyled from "./BrendsStyled";

const Brands = () => {
    return (
        <BrandsStyled>
<div><b>Бренды</b></div>
{goods.map((item) => (
    <div>{item.company}</div>
    ))}
        </BrandsStyled>
    )
}
export default Brands;