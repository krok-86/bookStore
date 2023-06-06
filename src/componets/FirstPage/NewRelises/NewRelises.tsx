import NewReliasesStyled from "./NewReliasesStyled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

interface ReleaseItem {
  picture: string;
  text: string;
  price: number;
}

const NewRealisesItem: ReleaseItem[] = [
  {
    picture: "/images/newReliases/блесна зеленая.jpg",
    text: "Вращающаяся блесна Yarie №672 Blender, 4.2 гр, SP6",
    price: 630,
  },
  {
    picture: "/images/newReliases/Кейс-чехол.jpg",
    text: "Кейс-чехол Garry Zonter, S, серый",
    price: 2399,
  },
  {
    picture: "/images/newReliases/колебалка голубая.jpg",
    text: "Колеблющаяся блесна Yarie №706 T-Spoon, 1.4 гр, BS-10",
    price: 495,
  },
  {
    picture: "/images/newReliases/колебалка розовая.jpg",
    text: "Колеблющаяся блесна Yarie №713 First Star, 10 г, A6",
    price: 530,
  },
  {
    picture: "/images/newReliases/спиннинг.jpg",
    text: "Спиннинг Zetrix Tezza TZS-732ML, 223 см, 2-12 г",
    price: 6480,
  },
  {
    picture: "/images/newReliases/цикада.jpg",
    text: "Раттлин Lucky Craft Air Claw S, 2.8 г, #Blow Brown Glow",
    price: 1095,
  },
];

const NewRelises = () => {
  return (
    <NewReliasesStyled>
      <div className="NewReliasesBlock">
        <div className="NewReliasesH1">Новые поступления</div>
        <div className="NewReliasesButton">посмотреть все новинки</div>
      </div>
      <div className="NewReliasesItem">
        {NewRealisesItem.map((item) => (
          <div className="NewRealisesBlock">
            <img className="NewRealisesPicture" src={item.picture} />
            <div className="NewRealisesLikeWrap">
              <FavoriteBorderIcon className="NewRealisesLike"></FavoriteBorderIcon>
            </div>
            <div className="NewRealisesText">{item.text}</div>
            <div className="NewRealisesPrice">{item.price}</div>
            <div className="NewRealisesButton">Купить</div>
          </div>
        ))}
      </div>
    </NewReliasesStyled>
  );
};

export default NewRelises;
