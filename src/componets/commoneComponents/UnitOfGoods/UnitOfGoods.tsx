import { goods } from "../../../constants";
import Footer from "../../FirstPage/Footer/Footer";
import NavBar from "../../FirstPage/NavBar/NavBar";
import UnitOfGoodsStyled from "./UnitOfGoodsStyled";

const UnitOfGoods = () => {

    return(
        <>
  <NavBar/>
  <UnitOfGoodsStyled>
    <div className="UnitHeader">
    {goods.map((item) => (
<div className="UnitText">
    <p><b>
        {item.subgroup}
        {item.company}
        {item.collection}        
        {item.name}
        {item.description}
        </b></p>
<img className="UnitPicture" src={item.img} />
</div>
    ))}
    </div>
  </UnitOfGoodsStyled>
  <Footer />
</>
    )
}
export default UnitOfGoods;