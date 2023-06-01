import SliderImgStyled from './SliderImgStyled';
import {useRef,useState} from 'react';


type SliderProps = {
    slides: string[];
}
const SliderImg = ({ slides }: SliderProps) => {
const conteinerRef = useRef<HTMLDivElement | null>(null);
const [indexImg, setIndexImg] = useState(0);
const handleClickImg = () => {
    if (indexImg < slides.length-1){
        setIndexImg(indexImg+1)
    } else {
        setIndexImg(0)
    }
    
};
    return (
        <SliderImgStyled>
            <div className="Carusel">
                <div className="CaruselWrapper">
                    <div ref={conteinerRef} className="CaruselConteiner">
                    {/* {slides.map((item) => {
                return (<div key = {item} className = {item}>
                    <img src={item} alt="" loading = "lazy"/>
                    </div>
                    )
            })} */}
            <img onClick = {handleClickImg} src = {slides[indexImg]}/>
                    </div>
                </div>
                <div className="CaruselPagination">
                </div>
            </div>
            
        </SliderImgStyled>
    )
}

export default SliderImg;

