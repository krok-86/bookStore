import styled from 'styled-components';

const SortBlockStyled = styled.div`

.Sort {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: red;
    /* text-align: center;
    vertical-align: middle; */
    background-color: #ffffff;
    border-radius: 20px;
    border: 0px;
    padding: 0px 20px;
    margin: 0px 90px;    
    height: 60px;
    width: 600px;
    text-align: center;
    color: #504a45;
    font-size: 13px;
    box-shadow: 0px 0px 20px rgba(0,0,0,0.15);
    font-size: 18px;
    
}
.Show {
    display: flex;
    align-items: center;
    justify-content: center; 
    padding: 0px 20px;
    height: 40px;
    border-radius: 99px;
    background-color: lightgray;
    cursor: pointer; 
}
.Show:hover {
    color: #ffffff;
    background-color: #ff0000;
    cursor: pointer; 
} 
`
export default SortBlockStyled;