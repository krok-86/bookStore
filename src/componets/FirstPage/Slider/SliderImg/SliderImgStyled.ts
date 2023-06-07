import styled from 'styled-components';

const SliderImgStyled = styled.div`
max-width: 1440px;
width: 100%;
background-color: #ffffff;

.CaruselConteiner {
    display: flex;
    align-items: center;
    background-color: #FFFFFF;
    padding-top: 30px;
    padding-bottom: 50px;
}
.CaruselImg {
    border-radius: 25px;
}
.SlideSelect {
width: 30px;
height: 30px;
border-radius: 50%;
background-color: #4e6481;
text-align: center;
margin: 0 10px;
display:flex;
justify-content: center;
align-items: center;
cursor: hand;
cursor: pointer;
}
.SlideSelect:hover {
    background-color: #ff0000;
}
.Arrow {
    color: #ffffff;
}
`
export default SliderImgStyled