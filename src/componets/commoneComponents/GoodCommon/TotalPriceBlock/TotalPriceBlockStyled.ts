import styled from 'styled-components';

const TotalPriceBlockStyled = styled.div`
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
    background-color: gray;
}
.TotalText {
    display: flex;
    justify-content: space-around;   
    background-color: yellow; 
    /* align-items: center; */
} 
.TotalTitle {
    color: #404040;
    font-size: 24px;
    background-color: lightblue;
}
`
export default TotalPriceBlockStyled;