import styled from 'styled-components';

const PriceBlockStyled = styled.div`

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
`
export default PriceBlockStyled;