import styled from 'styled-components';

const NewGoodsStyled = styled.div`
color: #504a45;
.SortMenu {
    display: flex;
    height: 300px;
}
.SortBlock {
    display: flex;
}
.Sort {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #ffffff;
    border-radius: 20px;
    border: 0px;
    padding: 0px 20px;
    margin: 0px 90px;
    /* width: 420px; */
    height: 60px;
    text-align: center;
    color: #504a45;
    font-size: 13px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
    font-size: 18px;
}
.Show {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 120px;
    padding: 0px 20px;
    height: 30px;
    border-radius: 99px;
    color: #504a45;
    cursor: pointer;
}
.Show:hover {
    color: #ffffff;
    background-color: #ff0000;
}

/* .gooodsList {

} */

.NewReliasesItem{
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
    margin-left: 30px;
}
.NewRealisesBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 156px;
    background-color: #f4f8fb;
    position: relative;    
}

.NewRealisesPicture {
    width: 156px;
    border-radius: 20px;
    cursor: hand;
    cursor: pointer;
}
.NewRealisesLikeWrap {
    width: 34px;
    height: 34px;
    background-color: #f4f8fb;
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
color: #5e728c;
cursor: hand;
    cursor: pointer;
}
.NewRealisesLike:hover {
    color: red;
}
.NewRealisesText {
    text-align: center;
    color: #5e728c;
    cursor: hand;
    cursor: pointer;
}
.NewRealisesText:hover {
    color: red;
}
.NewRealisesPrice {
    font-size: 24px;
    color: #404040;
    display:flex;
    justify-content: center;
    align-items: center;
}
.NewRealisesButton{
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 99px;
    background-color: yellow;
    height: 30px;
    margin: 10px 30px 40px 30px;
    color: #ffffff;
    background-color: #4e6481;
    cursor: hand;
    cursor: pointer;
}
.NewRealisesButton:hover {
    background-color: red;
}
`
export default NewGoodsStyled;