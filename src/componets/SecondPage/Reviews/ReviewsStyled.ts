import styled from 'styled-components';

const ReviewsStyled = styled.div`
max-width: 1380px;
width: 100%;
background-color: #ffffff;
padding: 40px 30px 30px 30px;
color: #4b4946;

p {
    font-size: 24px;
}
.ReviewInput {
    background-color: #ffffff;
}
.ReviewArea {
    padding: 26px 17px 11px 17px;
    margin: 30px 30px 45px;
    border: 2px solid #f3f3f3;
    border-radius: 5px;
    width: 280px;
    color: #000;
}
.ReviewInputBlock {
    border: 0px;
    background-color: #e8f0fe;
    outline:none;
    width: 15rem;
    height: 3rem;
    padding-right: 14px;
    background-color: #ffffff;
    cursor: pointer;
}
.ReviewButton {
    width: 175px;
    height: 40px;
    background-color: #4e6481;
    border-radius: 25px;
    margin: 30px 20px 30px;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.ReviewButton:hover {
    background-color: #ff0000;
}
`

export default ReviewsStyled;