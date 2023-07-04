import { goods } from "../../../constants";
import BrandsStyled from "./BrendsStyled";

const Brands = () => {
const brands = goods.reduce ((acc, elem)=>acc.add(elem.company),new Set())
    console.log(brands);
    return (
        <BrandsStyled>
<div className="BrandsHeader"><b>Бренды</b></div>
<ul>
    <li>
    <a className="BrandsName">{brands}</a>
    </li>    
</ul>  
        </BrandsStyled>
    )
}
export default Brands;