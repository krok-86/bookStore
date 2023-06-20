import Footer from "../../FirstPage/Footer/Footer";
import NavBar from "../../FirstPage/NavBar/NavBar";
import ReviewsStyled from "./ReviewsStyled";


const Reviews = () => {

    return (
        <>
            <NavBar />
            <ReviewsStyled>
                <p><b>Отзывы покупателей</b></p>
                <p >Добавить отзыв:</p>
                <div className="ReviewArea">
                    <div className="ReviewInput">
                        Текст отзыва*
                    </div>
                    <textarea className="ReviewInputBlock" placeholder="не заполнено"></textarea>
                </div>
                <div className="ReviewButton">Оставить отзыв</div>
                <div><p>Отзывы покупателей</p></div>
                <div>Белоусов Руслан</div>
                <div>16 июня 2023</div>
                <div>Все норм !!! На 5 звезд из 5 по форелевому ассортименту лучше магазина мне кажется нет. Быстрая сборка заказов удобный самовывоз компетентные продавцы</div>
            </ReviewsStyled>
            <Footer />
        </>
    )
}
export default Reviews;