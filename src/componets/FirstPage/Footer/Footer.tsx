import FooterStyled from "./FooterStyled";

const Footer = () => {
const Cards = [
    {
        class: 'Visa',
        value: 'Visa'
    },
    {
        class: 'MasterCard',
        value: 'MasterCard'
    },
    {
        class: 'Mir',
        value: 'МИР'
    },
]
    return (
        <FooterStyled>
<p>© 2005-2023. Рыболовный интернет-магазин «Японские снасти». Копирование материалов без разрешения правообладателя запрещено.</p>
<p>Мы принимаем онлайн и в шоу-руме:</p>
<div>
    {
    </div>  
<div>MasterCard</div>   
<div>МИР</div>  

        </FooterStyled>
    )
}

export default Footer;