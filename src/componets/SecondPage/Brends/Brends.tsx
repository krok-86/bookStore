import { goods } from "../../../constants";
import BrandsStyled from "./BrendsStyled";

const Brands = () => {
const brands = [... new Set(goods.map((item) => item.company))]
    return (
        <BrandsStyled>
<div className="BrandsHeader"><b>Бренды</b></div>
<ul>
             {brands.map((item) => (
            <li>
            <a className="BrandsName">{item}</a>
            </li>
        ))}
</ul>  
        </BrandsStyled>
    )
}
export default Brands;