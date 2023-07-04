import styled from 'styled-components';

const BrandsStyled = styled.div`
display: flex;
flex-direction: column;
align-items: center;

.BrandsHeader {
    display: flex;
    justify-content: start;
    
    color: #504a45;
    width: 1080px;
    font-size: 32px;
    background-color: green;
}
.BrandsName {
    display: flex;
    /* justify-content: start;
    align-items: center; */
    flex-direction: column;
    
    width: 1080px;
    font-size: 16px;
    background-color: yellow;

}
`
export default BrandsStyled;