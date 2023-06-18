import styled from 'styled-components';

const FavoriteStyled = styled.div`
.Empty {
    color: #404040;
    font-size: 26px;
    font-weight: 800;
    padding: 10rem;
}

.Include {
    color: #404040;
    font-size: 26px;
    font-weight: 900;
    padding: 3rem 2rem;    
}
.Accessible {
    font-size: 17px;
    background-color: #2d3f56;
    padding: 16px 20px 17px;
    color: #ffffff;
}
.BasketItemPicture {
    width: 156px;
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid #f1f1f1;

}
.BasketItem {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
    /* max-width: 824px; */
}
.BasketItemBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.BasketItemDiscription {
    display: flex;
    padding-top: 4rem;
    color: #4e6481;
    cursor: pointer;
}
.BasketItemDiscription:hover {
    color: #ff0000;
}
.BasketItemDelete {
    display: flex;
    cursor: pointer;
    color: #4e6481;    
}
.BasketItemDelete:hover {
    color: #ff0000;
}

.Total {
    display: flex;
    flex-direction: column;    
    width: 285px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
    /* padding-top: 20px; */
    border-radius: 20px;
}
.TotalBlock {
    display: flex;
    justify-content: space-evenly;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    margin: 15px;
    padding-bottom: 5px;
}
.TotalText {
    color: #404040;
    font-size: 17px;
}
.TotalButton {
    width: 175px;
    height: 40px;
    background-color: #9faab9;
    border-radius: 25px;
    /* padding: 11px 25px; */
    margin: 10px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    
    cursor: pointer;
}
.TotalButton:hover {
    background-color: #ff0000;
}
`
export default FavoriteStyled;