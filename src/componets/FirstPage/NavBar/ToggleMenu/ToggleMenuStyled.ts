import styled from 'styled-components';

const ToggleMenuStyled = styled.div`
.Menu {
position: fixed;
width: 100vw;
height: 100vh;
top:50px;
left: 0;
}
.MenuContent {
width: 30%;
height: 100%;
background-color: gray;
display: flex;
flex-direction: column;
align-items: center;
}
.Blur {
width: 100vw;
height: 100hv;
left: 30%;
backdrop-filter: blur(2px);
position: absolute;
}
.MenuHeader {
    padding: 10px;
    font-size: 2rem;
    color: white;
    border-bottom: 1px solid white;
    width: 100%;
    text-align: center;
}
ul li a {
    color: white;
    text-decoration: none;
}
ul {
    text-align: center;
}
`;
export default ToggleMenuStyled;