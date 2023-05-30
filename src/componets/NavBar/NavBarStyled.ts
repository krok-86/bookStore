import styled from 'styled-components';

const NavBarStyled = styled.div`
max-width: 1440px;
width: 100%;

.NavButtons {
    display: flex;
column-gap: 15px;
justify-content: flex-end;
padding: 15px 30px 15px 0;
    color: #bdcdd5;
}
.Info {
    display: flex;
    width: 100%;
    background-color: #222e3d;
}
.Logo {
    display: flex;
    width: 150px;
    height: 112px;
    padding: 5px;
}
.AddressTitle {
display:flex;
flex-direction: column;
justify-content: space-between;
padding: 5px;
}

.Info-Text {
    color: #d3d3d3;
    font-size: 13px; 
}

/* .ShowRoom {
    color: #d3d3d3;
    font-size: 13px;
} */
.Info-Texts--white {
    color: #ffffff;
}
.DrivingDirections {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4e6481;
    border-radius: 99px;
    border: 0px;
    width: 188px;
    height: 27px;
    text-align: center;
    color: #ffffff;
    font-size: 13px;
}
.WorkTime  {
    color: #ffffff;
    font-size: 13px;
}
.Daily {
    color: #ffffff;
    font-size: 13px;
}

.Phones {
    display:flex;
flex-direction: column;
justify-content: space-between;
padding: 5px;
}
.PhonesContacts {
    color: #d3d3d3;
    font-size: 13px
}
.PhonesCity {
    color: #ffffff;
    font-size: 13px;
}
.PhonesCountry {
    color: #ffffff;
    font-size: 13px;
}
.PhonesMessengers {
    color: #ffffff;
    font-size: 13px;
}
.PhonesNumber {
    color: #ffffff;
    font-size: 13px;
}

.SocialMedia {
    display:flex;
flex-direction: column;
justify-content: space-between;
padding: 5px;
}
.SocialMediaTraking {
    color: #d3d3d3d3;
    font-size: 13px;
}
.SocialMediaAll {

}

.YouTube {
    background-color: #ff0000;
    width: 26px;
    border-radius: 99px;
    margin: 5px;
}
.VK {
    background-color:#4a76a8;
    width: 26px;
    border-radius: 99px;
    margin: 5px;
}
.OK {
    background-color:#ee8208;
    width: 26px;
    border-radius: 99px;
    margin: 5px;
}

.Products {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #2d3f56;
    padding: 15px;
}
.ProductsCatalog {
    width: 175px;
    font-size: 15px;
    color: #ffffff;
    padding: 12px 3px 12px 45px;
    border-radius: 99px;
    border: 0px;
    text-align: center;
    background: #4e6481;
}
.ProductsCatalog:hover {
background-color: #ff0000;
}
.ProductSearch {
    width: 380px;
    font-size: 15px;
    color: gray;
    padding: 12px 35px 12px 20px;
    border-top-left-radius: 99px;
    border-bottom-left-radius: 99px;
    border: 0px;
    text-align: start;
    background: #ffffff;
}
.ProductSearchButton {
    width: 62px;
    font-size: 15px;
    color: gray;
    border: 0px;
    text-align: start;
    background: #4e6481;
    border-top-right-radius: 99px;
    border-bottom-right-radius: 99px;
}

.searchInput {
    width: 442px;
    display: flex;
    
}
`
export default NavBarStyled;