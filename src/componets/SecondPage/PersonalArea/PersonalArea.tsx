// import { useState } from "react";
import PersonalAreaStyled from "./PersonalAreaStyled";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PersonalArea = () => {
  return (
    <PersonalAreaStyled>
      <p className="Persponal">
        <b>Личный кабинет</b>
      </p>
      {/* <div className="Entrance"> */}
      {/* <div className="EntranceText">Вход</div>
        <div className="EntranceMail" ><div className="Ball"></div>По почте</div>
        <div className="EntrancePhone"><div className="Ball"></div>По телефону</div>
        </div> */}
      <div className="Registration">
        <div className="RegistrationMail">
          E-mail*
          <input
            className="RegistrationInput"
            placeholder="Не заполнено"
          ></input>
        </div>
        <div className="RegistrationPass">
          <div className="RegistrationPassBlock">
            Пароль*
            <input
              className="RegistrationInput"
              placeholder="Не заполнено"
            ></input>
          </div>
          <RemoveRedEyeIcon className="RegistrationIcon" />
        </div>
        <div className="RegistrationFogot">Не помню пароль</div>
      </div>

      <div className="RegistrationButton">Авторизоваться</div>
    </PersonalAreaStyled>
  );
};

export default PersonalArea;
