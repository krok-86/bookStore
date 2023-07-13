import styled from 'styled-components';

const SelectedGoodsStyled = styled.div`
display: flex;

.SelectedGoodsItem {
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;    
}
.SelectedGoodsPicture {
    width: 156px;
    border-radius: 20px;
    cursor: pointer;
    border: 1px solid #f1f1f1;

}
.SelectedGoodsShowPicture {
position: fixed;
top: 50%;
left: 50%;
cursor: pointer;
transform: translate(-50%, -50%);
    width: 900px;
    height: 900px;
    border-radius: 20px;
    border: 1px solid #eaeaea;
    cursor: pointer;     
}

.SelectedGoodsItemBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.SelectedGoodsDiscription {
    display: flex;
    padding-top: 4rem;
    color: #4e6481;
    cursor: pointer;
}
.SelectedGoodsDiscription:hover {
    color: #ff0000;
}
.SelectedGoodsDelete {
    display: flex;
    cursor: pointer;
    color: #4e6481;    
}
.SelectedGoodsDelete:hover {
    color: #ff0000;
}
`
export default SelectedGoodsStyled;