import Footer from "../../FirstPage/Footer/Footer";
import NavBar from "../../FirstPage/NavBar/NavBar";
import PaymentStyled from "./PaymentStyled";

const Payment = () => {

    return (
        <>
            <NavBar />
            <PaymentStyled>
            <h1 className= "PaymentText"><b>Оплата</b></h1>
    <ul>
        <li>Доступные способы оплаты</li>
        <li>Оплата при курьерской доставке</li>
        <li>Оплата при самовывозе</li>
        <li>Оплата при доставке Почтой РФ, EMS или СДЭК (транспортной компанией)</li>
    </ul>
            </PaymentStyled>
            <Footer />
        </>
    )
}
export default Payment;