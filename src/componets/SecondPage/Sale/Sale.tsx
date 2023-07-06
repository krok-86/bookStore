import GoodCommon from "../../commoneComponents/GoodCommon/GoodCommon";
import UnitOfGoods from "../../commoneComponents/UnitOfGoods/UnitOfGoods";
import SaleStyled from "./SaleStyled";

const Sale = () => {

  return (
    <SaleStyled>
    {/* <GoodCommon isSale = {true}/> */}
   <UnitOfGoods />
    </SaleStyled>
  )
}

export default Sale;
