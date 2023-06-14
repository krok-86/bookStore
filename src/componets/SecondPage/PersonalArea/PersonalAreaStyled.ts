import styled from 'styled-components';

const PersonalAreaStyled = styled.div`
width: 100%;
max-width: 1440 rem;

.Persponal{
    margin: 20px;
}
.Entrance {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 60px;
    background-color: #ffffff;
    border-radius: 25px;
    box-shadow: 1px 1px 12px #bdcdd5;
    margin: 20px;    
}
.EntranceText {
margin-left: 15px;
}
.EntranceMail {
    display: flex;
    align-items: center;        
}
.EntranceMail:hover{
    background-color: #ff0000;
    color: #ffffff;
    width: 98px;
    height: 30px;
    border-radius: 25px;
    cursor: pointer;
}
.EntrancePhone {
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.EntrancePhone:hover{
    background-color: #ff0000;
    color: #ffffff;
    border-radius: 25px;
    width: 120px;
    height: 30px;
    cursor: pointer;
}
.Ball {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #b3bcc5;
    margin: 5px;    
}

.Registration {
    display: flex;
    align-items: center;
    padding: 36px 17px 11px;    
}

.RegistrationMail {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px;
    width: 256px;
    background-color: #e8f0fe;
    margin: 20px;
    color: #5e728c;
}
.RegistrationPass {
    display: flex;
    align-items: flex-end;
    padding: 15px;
    width: 256px;
    background-color: #e8f0fe;
    margin: 20px;
    color: #5e728c;
}
.RegistrationPassBlock {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 235px;
    padding-right: 15px;
}
.RegistrationIcon {
    color: #575a5f;
    cursor: pointer;
}
.RegistrationFogot {
    color: #575a5f;
    cursor: pointer;
}
.RegistrationFogot:hover {
    color: #ff0000;
}
.RegistrationInput {
    border: 0px;
    background-color: #e8f0fe;
    outline:none;
}
.RegistrationButton {
    width: 175px;
    height: 40px;
    background-color: #4e6481;
    border-radius: 25px;
    margin: 10px 20px 0px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;

}
.RegistrationButton:hover {
    background-color: #ff0000;
}

`
export default PersonalAreaStyled;
