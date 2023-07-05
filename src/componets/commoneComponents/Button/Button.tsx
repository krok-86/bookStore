import ButtonStyled from "./ButtonStyled";

const Button = () => {
const titleBuy = 'как сделать название кнопки динамическим'
    return (
        <ButtonStyled>
            <div className="NewRealisesButton">{titleBuy}</div>
        </ButtonStyled>
    )
}
export default Button;