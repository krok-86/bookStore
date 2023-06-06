import styled from 'styled-components';

const NewReliasesStyled = styled.div`
max-width: 1440px;
width: 100%;
background-color: #f4f8fb;

.NewReliasesBlock {
    display: flex;
    justify-content: space-between;
}
.NewReliasesH1 {
color: #404040;
font-size: 26px;
margin-left: 30px;
}
.NewReliasesButton {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ebf0f7;
    border-radius: 99px;
    border: 0px;
    width: 188px;
    height: 27px;
    text-align: center;
    color: #627388;
    font-size: 13px;
    margin-right: 30px;
}
.NewReliasesButton:hover {
background-color: #ff0000;
color: #ffffff;
}

.NewReliasesItem{
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
    margin-left: 30px;
}
.NewRealisesBlock {
    width: 156px;
    
}
.NewRealisesPicture {
    width: 156px;
    
}
`
export default NewReliasesStyled;