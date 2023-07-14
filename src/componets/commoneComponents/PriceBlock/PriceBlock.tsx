import { useState } from "react";
import PriceBlockStyled from "./PriceBlockStyled";

const PriceBlock = ({price}) => {
    const [count, setCount] = useState(1);
    const decreaseCounter = () => {
    if (count !== 1) {
      setCount(count - 1);
    } 
  };
    return (
        <PriceBlockStyled>
             <div className="Price">
            <div className="PriceNumber">{price}₽</div>
            <div className="PriceButton">
              <div className="PriceSign" onClick={decreaseCounter}>
                -
              </div>
              <div className="PriceQuantity">{count}</div>
              <div className="PriceSign" onClick={() => setCount(count + 1)}>
                +
              </div>
            </div>
          </div>
        </PriceBlockStyled>
    )
}
export default PriceBlock;