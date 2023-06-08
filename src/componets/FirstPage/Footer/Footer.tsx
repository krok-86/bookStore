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
<div className="CommonBlock">
<div className="LeftBlock">
<div className="Card">
<p>Мы принимаем онлайн и в шоу-руме:</p>
<div className="CardItem">
    {cards.map((item)=>{
        return (
        <div className={item.class}>{item.value}</div>
    )})}
    </div>  
    </div>
<div className="Delivery">Мы отправляем заказы службами:</div>
<div className="Mail">
    {mailing.map((item)=>{
        return (
            <div className={item.class}>{item.value}</div>
        )
    })}
</div>
<div className="Entity">
<p>ИП Иванов Иван Иванович</p>
<p>ИНН 8888888888888</p>
</div>
</div>

<div className="CenterBlock">
<div className="Documentation">
    <p>Политика конфиденциальности</p>
    <p>Пользовательское соглашение</p>
    <p>Гарантия и возврат</p>
</div>
</div>
</div>

        </FooterStyled>
    )
}

export default Footer;