import styled from 'styled-components';

const SliderImgStyled = styled.div`
max-width: 1440px;
width: 100%;
background-color: #ffffff;

.CaruselConteiner {
    display: flex;
    align-items: center;
    background-color: gray;
    padding-top: 30px;
    padding-bottom: 50px;

}
.CaruselImg {
    border-radius: 25px;
}
.SlideNext {
width: 30px;
height: 30px;
border-radius: 99px;
background-color: #4e6481;
text-align: center;
margin: 0 10px;
animation: move 1s ease-in-out 0.5s 2 alternate;
 -moz-animation: move 1s ease-in-out 0.5s 2 alternate;
 -webkit-animation: move 1s ease-in-out 0.5s 2 alternate;

}

@keyframes move {
 0% { transform: translateX(0); }
 50% { transform: translateX(20px); }
 100% { transform: translateX(100px); }
}

.SlideNext:hover {
    background-color: #ff0000;
}
.Arrow {
    color: #ffffff;
}
/* .Carusel {
    position: relative;
    width: 100%;
    padding: 10px;
}
.Wrapper {
    width: 100%;

    overflow: hidden;
    border-radius: 6px;
}
.Conteiner {
    position: relative;
    width: 100%;
    display: flex;
    gap: 15px;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    overflow-y: hidden;
    overflow-x: scroll;
}
.Slide {
  inset: 0;
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  .Img {
    max-width: 100%;
    max-height: 100%;
  }
}

.pagination {
  position: absolute;
  height: 20px;
  left: 0;
  right: 0;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.Dot {
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 14px;
  border: none;
  background-color: rgba(#000, .2);
  transition: background-color 250ms ease;
}
  &.Active {
    background-color: #fff;
  } */
`
export default SliderImgStyled