import Footer from "../../FirstPage/Footer/Footer";
import NavBar from "../../FirstPage/NavBar/NavBar";
import RegistrationStyled from "./RegistrationStyled";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';


const Registration = () => {

    return(
        <>
<NavBar/>
<RegistrationStyled>
<div className="RegText">Регистрация</div>
    <div className="Reg">
        <div className="RegMail">E-mail*</div>
        <input className="RegMailInput" placeholder="Не заполнено"></input>
    </div>
    <div className="Reg">
    <div className="RegMail">Пароль*</div>
    <input className="RegMailInput" placeholder="Не заполнено"></input>
    <RemoveRedEyeIcon className="RegistrationIcon"/>
    </div>
    <div>
    <div className="Reg">
    <div className="RegMail">Повторите пароль*</div>
    <input className="RegMailInput" placeholder="Не заполнено"></input>
    <RemoveRedEyeIcon className="RegistrationIcon"/>
    </div>
    </div>
    <div className="Contract">
        Нажимая кнопку «Зарегистрироваться» вы даете согласие на обработку персональных данных и принимаете условия пользовательского соглашения.
    </div>
    <div className="RegButton">Зарегистрироваться</div>
</RegistrationStyled>
<Footer/>
</>
    )
}

export default Registration;