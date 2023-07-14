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
.Basket {
    display: flex;
    justify-content: space-evenly; 
    align-items: center;
}
`
export default BasketStyled;