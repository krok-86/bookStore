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
    height: 37px;
    text-align: center;
    color: #627388;
    font-size: 16px;
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
    background-color: gray;
    position: relative;
}

.NewRealisesPicture {
    width: 156px;
    border-radius: 20px;
    
}
.NewRealisesLikeWrap {
    width: 34px;
    height: 34px;
    /* background-color: #f3f3f3; */
    background-color: red;
    cursor: hand;
    cursor: pointer;
    border-radius: 50%;
    background-size: 16px 17px;
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 128px;
}
.NewRealisesLike{

}
`
export default NewReliasesStyled;