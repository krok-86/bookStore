import FooterStyled from "./FooterStyled";

const Footer = () => {
const cards = [
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
const mailing = [
    {
        class: 'Post',
        value: 'Почта'
    },
    {
        class: 'InstantMail',
        value: 'EMS'
    },
    {
        class: 'DeliveryService',
        value: 'СДЭК'
    },
]
    return (
        <FooterStyled>
<p className="Warning">© 2005-2023. Рыболовный интернет-магазин «Японские снасти». Копирование материалов без разрешения правообладателя запрещено.</p>
<div className="Card">
<p>Мы принимаем онлайн и в шоу-руме:</p>
<div>
    {cards.map((item)=>{
        return (
        <div className={item.class}>{item.value}</div>
    )})}
    </div>  
    </div>
<div>Мы отправляем заказы службами:</div>
<div>
    {mailing.map((item)=>{
        return (
            <div className={item.class}>{item.value}</div>
        )
    })}
</div>
<p><b>ИП Иванов Иван Иванович</b></p>
<p><b>ИНН 8888888888888</b></p>
<div>
    <p>Политика конфиденциальности</p>
    <p>Пользовательское соглашение</p>
    <p>Гарантия и возврат</p>
</div>

        </FooterStyled>
    )
}

export default Footer;