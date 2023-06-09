import { useState } from "react";
import ReviewsStyled from "./ReviewsStyled";

const Reviews = () => {
  const [review, setReview] = useState<string>("");
  const handleClick = () => {
    setReview(review);
  };
  return (
    <ReviewsStyled>
      <p>
        <b>Отзывы покупателей</b>
      </p>
      <p>Добавить отзыв:</p>
      <div className="ReviewArea">
        <div className="ReviewInput">Текст отзыва*</div>
        <textarea
          className="ReviewInputBlock"
          value={review}
          onChange={(event) => setReview(event.target.value)}
          placeholder="не заполнено"
        />
      </div>
      <button className="ReviewButton" onClick={handleClick}>
        Оставить отзыв
      </button>
      <div>
        <p>Отзывы покупателей</p>
      </div>
      <div>Белоусов Руслан</div>
      <div>16 июня 2023</div>
      <div>{review}</div>
    </ReviewsStyled>
  );
};
export default Reviews;
