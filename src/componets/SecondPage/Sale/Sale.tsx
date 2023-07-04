import GoodBlock from "../../commoneComponents/GoodBlock/GoodBlock";
import UnitOfGoods from "../../commoneComponents/UnitOfGoods/UnitOfGoods";
import NewGoods from "../NewGoods/NewGoods";
import SaleStyled from "./SaleStyled";

const Sale = () => {

  return (
    <SaleStyled>
    {/* <NewGoods isSale = {true}/> */}
   <UnitOfGoods />
    </SaleStyled>
  )
}

export default Sale;
