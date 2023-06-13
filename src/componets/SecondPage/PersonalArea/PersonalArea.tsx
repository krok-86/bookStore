import PersonalAreaStyled from "./PersonalAreaStyled";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const PersonalArea = () => {

    return (
<PersonalAreaStyled>
    <p className="Persponal"><b>Личный кабинет</b></p>
    <div className="Entrance">
        <div className="EntranceText">Вход</div>
        <div className="EntranceMail" ><div className="Ball"></div>По почте</div>
        <div className="EntrancePhone"><div className="Ball"></div>По телефону</div>
        </div>
        <div className="Registration">
        <div className="RegistrationMail"></div>
        <div className="RegistrationPass">
            <input></input> 
            <RemoveRedEyeIcon/>
        </div>
        <div className="RegistrationFogot">Не помню пароль</div>
        </div>

        <div className="RegistrationButton">Авторизоваться</div>
    
</PersonalAreaStyled>
    )
}

export default PersonalArea; 