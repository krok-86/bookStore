import styled from 'styled-components';

const FooterStyled = styled.div`
max-width: 1440px;
width: 100%;
background-color: #2d3f56;


.Warning {
    color: #ffffff;
    padding: 30px ;
}
.CommonBlock {
    max-width: 700px;
    display: flex;
    justify-content: space-between;

}
.LeftBlock {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.Card {
    color: #d3d3d3;
}
.CardItem {
    display: flex;
    justify-content: space-between;
    max-width: 250px;
}
.Visa {
    font-size: 22px;
    font-weight: 900;
    color: #075aa2;    
}
.MasterCard {
    font-size: 22px;
    font-weight: 900;
    color: #c72131;
}
.Mir {
    font-size: 22px;
    font-weight: 900;
    color: #22a64d;
}
.Delivery {
    color: #d3d3d3;    
}
.Mail {
    display: flex;
    justify-content: space-between;
    max-width: 228px;
}
.Post {
    font-size: 22px;
    font-weight: 900;
    color: #1937ff;
}
.InstantMail {
    color: #ed8f1d;
    font-size: 22px;
    font-weight: 900;
}

.DeliveryService {
    font-size: 22px;
    font-weight: 900;
    color: #07ac3c;
}
.Entity {
    color: #d3d3d3;
}
.Documentation{
    color: #d3d3d3;
}
`

export default FooterStyled;