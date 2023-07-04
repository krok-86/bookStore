import NewGoods from "../NewGoods/NewGoods";
import SaleStyled from "./SaleStyled";

const Sale = () => {

  return (
    <SaleStyled>
    <NewGoods isSale = {true}/>
    </SaleStyled>
  )
}

export default Sale;
