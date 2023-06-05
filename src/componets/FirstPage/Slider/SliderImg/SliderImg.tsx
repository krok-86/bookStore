import SliderImgStyled from './SliderImgStyled';
import { useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Switch } from '@mui/material';

type SliderProps = {
    slides: string[];
}

const SliderImg = ({ slides }: SliderProps) => {
    // const conteinerRef = useRef<HTMLDivElement | null>(null);
    const [indexImg, setIndexImg] = useState(0);
    
// enum Switch {
// Before,
// Next
// }


    const handleClickBeforeImg = () => {
        console.log(indexImg)
         if (indexImg >= 1) {
            setIndexImg(indexImg - 1)
        } else {
            setIndexImg(slides.length -1)
        }
        }

    const handleClickNextImg = () => {
        console.log(indexImg)
        if (indexImg < slides.length - 1) {
            setIndexImg(indexImg + 1)
        } else {
            setIndexImg(0)
        }
    }


        return (
            <SliderImgStyled>
                <div className="Carusel">
                    <div className="CaruselWrapper">
                         <div  className="CaruselConteiner"> {/* ref={conteinerRef} */}
                            <div className="SlideNext" onClick={() => handleClickBeforeImg()}>
                                <NavigateBeforeIcon className="Arrow" />
                            </div>

                            {/* {slides.map((item) => {
                return (<div key = {item} className = {item}>
                    <img src={item} alt="" loading = "lazy"/>
                    </div>
                    )
            })} */}
                            <img className="CaruselImg" src={slides[indexImg]} />
                            {/* <div className="SlideNext" onClick={() => handleClickNextImg()}> */}
                            <div className="SlideNext" onClick={() =>handleClickNextImg()}>
                                <NavigateNextIcon className="Arrow" />
                            </div>
                        </div>
                    </div> 
                    <div className="CaruselPagination">
                    </div>
                </div>

            </SliderImgStyled>
        )
    }

    export default SliderImg;