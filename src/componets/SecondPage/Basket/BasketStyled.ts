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
    padding: 1rem;
    max-width: 824px;
}
.BasketItemBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.BasketItemDiscription {
    display: flex;
    padding-top: 4rem;
    color: #4e64a1;
    cursor: pointer;
}
.BasketItemDiscription:hover {
    color: #ff0000;
}
.BasketItemDelete {
    display: flex;
    cursor: pointer;
    color: #4e64a1;    
}
.BasketItemDelete:hover {
    color: #ff0000;
}
`
export default BasketStyled;