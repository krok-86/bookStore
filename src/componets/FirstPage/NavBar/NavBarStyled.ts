import styled from 'styled-components';

const NavBarStyled = styled.div`
max-width: 1440 rem;
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
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 100%;
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
.NavButtonsTitle:hover {
color: #ffffff;
}

.Info-Text {
    color: #d3d3d3;
    font-size: 13px; 
}
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
.DrivingDirections:hover {
background-color: #ff0000;
}

.PhonesTitle {
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
.NavInfo {
    display: flex;
column-gap: 15px;
justify-content: flex-start;
padding: 15px 30px;
background-color: #222e3d;
color: #d3d3d3;
}
.Products {
    position: sticky;
    top: 0;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #2d3f56;
    padding: 15px;
}

.ProductSearch {
    width: 380rem;
    font-size: 15px;
    color: gray;
    padding: 12px 35px 12px 20px;
    border-top-left-radius: 99px;
    border-bottom-left-radius: 99px;
    border: none;
    text-align: start;
    background: #ffffff;
}
.MagnifyingGlass {
color: #ffffff;
font-size: 2rem;
}
.ProductSearchButton {
    width: 62px;
    font-size: 15px;
    color: gray;
    border: 0px;
    background: #4e6481;
    border-top-right-radius: 99px;
    border-bottom-right-radius: 99px;
}
.ProductSearchButton:hover {
background-color: #ff0000;
}
.SearchInput {
    width: 442px;
    display: flex;
}

.ProductsFavorites {
    background-color: #2d3f56;
    border: 0px;
    color: #bdcdd5;
}
.ProductsFavorites:hover {
color: #ffffff;
}
.ProductsFavoritesBadge {
    color: #bdcdd5;
}
.ProductsFavoritesIkon {
    color: #bdcdd5;
}
.ProductsFavoritesIkon:hover {
color: #ffffff;
}
.MuiBadge-badge {
color: "lightgreen";
background-color: "red";
}
.PersonalBlock{
    padding-right: 5rem;
}
.Personal {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0001c;
    border-radius: 99px;
    border: 0px;
    padding: 7px 18px 7px 18px;
    text-align: center;
    color: #ffffff;
    font-size: 13px;   
}


`
export default NavBarStyled;
