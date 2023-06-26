import styled from 'styled-components';

const GoodBlockStyled = styled.div`
.GoodsItem{
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
    margin-left: 30px;
}
.GoodsArea {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 156px;
    margin: 1rem;
    background-color: #f4f8fb;
    position: relative;    
}

.GoodsPicture {
    width: 156px;
    border-radius: 20px;
    cursor: pointer;
}
.GoodsLikeWrap {
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
.GoodsLike{
    color: #5e728c;
    cursor: pointer;
}
.GoodsLike:hover {
    color: red;
}
.GoodsText {
    text-align: center;
    color: #5e728c;
    cursor: pointer;
}
.GoodsText:hover {
    color: red;
}
.GoodsPrice {
    font-size: 24px;
    color: #404040;
    display:flex;
    justify-content: center;
    align-items: center;
}
`
export default GoodBlockStyled;