import styled from 'styled-components';

const NavBarStyled = styled.div`
max-width: 1440px;
/* background-color: EAEAEA;  */
width: 100%;
.NavButtons {
    display: flex;
column-gap: 15px;
justify-content: flex-end;
padding: 15px 30px 15px 0;
    color: #bdcdd5;
}
.Logo {
   width : 150px;
   height: 112px;
}
.Info {
    display: flex;
    width: 100%;
background-color: #404040;
}
.DrivingDirections {
    display: flex;
    background-color: #4e6481;
    border-radius: 99px;
    border: 0px;
    width: 188px;
    height: 27px;
    text-align: center;
}
`
export default NavBarStyled;