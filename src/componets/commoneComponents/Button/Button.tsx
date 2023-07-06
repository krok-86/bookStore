import { FC } from "react";
import ButtonStyled from "./ButtonStyled";

interface INameButton {
    nameButton?: string,
  }
const Button:FC<INameButton> = ({nameButton}) => {

    return (
        <ButtonStyled>
            <div className="NewRealisesButton">{nameButton}</div>
        </ButtonStyled>
    )
}
export default Button;