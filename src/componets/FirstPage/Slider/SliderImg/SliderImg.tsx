import SliderImgStyled from './SliderImgStyled';
import {useRef} from 'react';

type SliderProps = {
    slides: string[];
}
const SliderImg = ({ slides }: SliderProps) => {
const conteinerRef = useRef<HTMLDivElement | null>(null);
    return (
        <SliderImgStyled>
            <div className="Carusel">
                <div className="CaruselWrapper">
                    <div ref={conteinerRef} className="CaruselConteiner">
                    {slides.map((item) => {
                return (<div key = {item} className = {item}>
                    <img src={item} alt="" loading = "lazy"/>
                    </div>
                    )
            })}
                    </div>
                </div>
                <div className="CaruselPagination">
                </div>
            </div>
            
        </SliderImgStyled>
    )
}

export default SliderImg;

