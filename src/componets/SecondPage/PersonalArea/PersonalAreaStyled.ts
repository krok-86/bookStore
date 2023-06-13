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
width: 256px;
height: 66px;
background-color: #e8f0fe;
margin: 20px;
}
.RegistrationPass {
    width: 256px;
height: 66px;
background-color: #e8f0fe;
margin: 20px;
}

`
export default PersonalAreaStyled;
