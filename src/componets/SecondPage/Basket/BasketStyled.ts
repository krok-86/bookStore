import styled from 'styled-components';

const BasketStyled = styled.div`

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
.Price {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    align-self: center;    
    width: 220px;
    height: 100px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
    padding-top: 20px;
    border-radius: 20px;        
}
.PriceNumber{
    color: #404040;
    font-size: 20px;
    font-weight: 900;
}
.PriceButton{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #f3f3f3;
    border-radius: 5px;
    width: 7rem;
    height: 30px;
    background-color: #f3f3f3;    
}
.PriceQuantity {
    width: 50px;
    height: 26.4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
}
.PriceSign {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #506682;
    font-size: 25px;
    font-weight: 900;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f3f3f3;
}
.PriceSign:hover {
    background-color: #ff0000;
    color: #ffffff;
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
export default BasketStyled;