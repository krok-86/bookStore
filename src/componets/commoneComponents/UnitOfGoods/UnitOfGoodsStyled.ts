import styled from 'styled-components';

const UnitOfGoodsStyled = styled.div`
.UnitHeader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
}
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
.UnitShowPicture {
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
    width: 900px;
    height: 900px;
    border-radius: 20px;
    border: 1px solid #eaeaea;
    cursor: pointer;     
}
/* .UnitPicClose {
	background-color: #ff0000;
	border-radius: 50%;
	color: #ffffff;
	display: flex;
	justify-content: center;
	align-self: flex-start;
	margin: 10px;
} */
.UnitDiscriptionBlock {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
}
.UnitBlock {
    padding: 30px;
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
.UnitPrice {
    text-align: center;
    color: #404040;
    font-size: 28px;
}
.UnitAdvan {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 286px;
    height: 322px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
    padding: 30px;
    margin: 30px;
    border-radius: 20px;
    border-bottom: 1px solid #eaeaea;
}
.UnitBlockText {
    color: #707f8d;
    font-size: 18px;
    
}
.UnitAdd {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #eaeaea;
    font-size: 18px;
    cursor: pointer;
}
.UnitAdd:hover {
    color: #ff0000;
}
`
export default UnitOfGoodsStyled;