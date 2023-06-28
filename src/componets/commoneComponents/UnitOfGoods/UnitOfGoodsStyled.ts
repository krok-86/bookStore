import styled from 'styled-components';

const UnitOfGoodsStyled = styled.div`
.UnitText {
color: #404040;
font-size: 26px;
padding: 14px 0 33px 19px;
}
.UnitPicture {
    width: 370px;
    height: 370px;
    border-radius: 20px;
    padding: 16px;
    border: 1px solid #eaeaea;
    cursor: pointer;    
}
.UnitPicture:hover {
    border: 1px solid #ff0000;
}
.UnitDiscriptionBlock {
    display: flex;
}
.UnitBlock {
    padding: 10px;
}
.UnitProperty {
    font-size: 24px;    
    color: #434343;    
}
.UnitTable {
    display: flex;
    flex-direction: column;    
    width: 440px;
}
.UnitItem {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    color: #707f8d;
    border-bottom: 1px solid #eaeaea;
    margin: 10px;  
    padding: 10px;  
}
`

export default UnitOfGoodsStyled;