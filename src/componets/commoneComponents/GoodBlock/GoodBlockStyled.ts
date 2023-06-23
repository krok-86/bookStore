import styled from 'styled-components';

const GoodBlockStyled = styled.div`
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
    margin: 1rem;
    background-color: #f4f8fb;
    position: relative;    
}

.NewRealisesPicture {
    width: 156px;
    border-radius: 20px;
    cursor: pointer;
}
.NewRealisesLikeWrap {
    width: 34px;
    height: 34px;
    background-color: #f4f8fb;   
    border-radius: 50%;
    background-size: 16px 17px;
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0px;
    top: 128px;
    cursor: pointer;
}
.NewRealisesLike{
    color: #5e728c;
    cursor: pointer;
}
.NewRealisesLike:hover {
    color: red;
}
.NewRealisesText {
    text-align: center;
    color: #5e728c;
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
/* .NewRealisesButton{
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 99px;    
    height: 30px;
    margin: 10px 30px 40px 30px;
    color: #ffffff;
    background-color: #4e6481;    
    cursor: pointer;
}
.NewRealisesButton:hover {
    background-color: red;
}  */
`
export default GoodBlockStyled;