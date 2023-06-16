import styled from 'styled-components';

const RegistrationStyled = styled.div`

.RegText {
    font-weight: 800;
    font-size: 26px;
    color: #404040;
    padding: 45px 10px 33px 19px;
}
.Reg {
    padding: 26px 17px 11px 17px;
    margin: 30px 30px 45px;
    border: 2px solid #f3f3f3;
    border-radius: 5px;
    width: 280px;
    color: #000;
}
.RegMail {
    background-color: #ffffff;
}
.RegMailInput {
    border: 0px;
    background-color: #e8f0fe;
    outline:none;
    width: 15rem;
    height: 3rem;
    padding-right: 14px;
    background-color: #ffffff;
    cursor: pointer;
}
.RegistrationIcon {
    color: #575a5f;
    cursor: pointer;
}
.Contract {
    color: #404040;
    padding-left: 20px;    
}
.RegButton {
    width: 175px;
    height: 40px;
    background-color: #4e6481;
    border-radius: 25px;
    margin: 30px 20px 30px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.RegButton:hover {
    background-color: #ff0000;
}
`
export default RegistrationStyled;