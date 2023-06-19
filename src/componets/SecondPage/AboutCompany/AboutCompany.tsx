import Description from "../../FirstPage/Description/Description";
import Footer from "../../FirstPage/Footer/Footer";
import NavBar from "../../FirstPage/NavBar/NavBar";
import AboutCompanyStyled from "./AboutCompanyStyled";


const AboutCompany = () => {
    return (
        <>
        <NavBar />
        <AboutCompanyStyled>
            <Description />
        </AboutCompanyStyled>
        <Footer />
        </>
    )
}
export default AboutCompany;