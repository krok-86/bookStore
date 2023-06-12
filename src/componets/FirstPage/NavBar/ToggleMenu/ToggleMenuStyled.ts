import styled from 'styled-components';

interface IToggleMenuStyled {
    isActive: boolean,
}

const ToggleMenuStyled = styled.div<IToggleMenuStyled>`
.Menu {
position: fixed;
/* border-radius: 20px; */
min-width: 100vw;
width: fit-content;
top:330px;
left: 2px;
display: ${(p) => p.isActive ? 'block' : 'none'};
}
.MenuContent {
width: 30%;
height: 100%;
background-color: #ffffff;
border-radius: 20px;
color:#97a4b4;
display: flex;
align-items: center;
justify-content: space-between;
}
ul li  {
    color: #97a4b4;
    text-decoration: none;
    list-style-type: none;
    text-align: left;
}
ul li a:hover {
    background-color: #ff0000;
    color: #ffffff;
    width: 100%;
    padding: 5px;
    border-radius: 20px;
}
a {
    color: #97a4b4;
    text-decoration: none; 
}
ul {
    text-align: center;    
}
.MenuBranchLeft {
   background-color: #f8f8f8;
}
.MenuBranchRight {
    width: 50%; 
    border-left: 1px solid #f1f1f1;
}
.MenuClose {
    background-color: #ff0000;
    border-radius: 50%;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-self: flex-start;
    margin: 10px;
}
.ProductsCatalog {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 175rem;
    font-size: 20px;
    color: #ffffff;
    margin: 12px 130px 12px 45px;
    padding: 20px 20px 20px 20px;
    border-radius: 99px;
    border: 0px;
    text-align: center;
    background: #4e6481;
}
.ProductsCatalog:hover {
background-color: #ff0000;
}
`;
export default ToggleMenuStyled;