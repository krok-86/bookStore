import SliderImgStyled from './SliderImgStyled';
import { useEffect, useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Switch } from '@mui/material';


const slides: string[] = [
    "/images/slider/buffler.jpg",
    "/images/slider/frapp.jpg",
    "/images/slider/social_slider.jpg",
     ]
const SliderImg = () => {
    // const conteinerRef = useRef<HTMLDivElement | null>(null);
    const [indexImg, setIndexImg] = useState(0);
    const makeCycle = () => {
        if (indexImg < slides.length - 1) {
            setIndexImg(indexImg + 1)
        } else {
            setIndexImg(0)
        }  
    }
    useEffect (() => {
        const slider = setInterval (makeCycle, 2000)
        return () => {
            clearInterval(slider);
        }
    }, [indexImg]) 
// enum Switch {
// Before,
// Next
// }


    const handleClickBeforeImg = (isForward: boolean) => {
        console.log(indexImg)
        if (isForward) {
         if (indexImg >= 1) {
            setIndexImg(indexImg - 1)
        } else {
            setIndexImg(slides.length -1)
        }
        } else {
            if (indexImg < slides.length - 1) {
                setIndexImg(indexImg + 1)
            } else {
                setIndexImg(0)
            } 
        }
    } 
    


        return (
            <SliderImgStyled>
                <div className="Carusel">
                    <div className="CaruselWrapper">
                         <div  className="CaruselConteiner"> {/* ref={conteinerRef} */}
                            <div className="SlideNext" onClick={() => handleClickBeforeImg(true)}>
                                <NavigateBeforeIcon className="Arrow" />
                            </div>

                            
                            <img className="CaruselImg" src={slides[indexImg]} />
                            {/* <div className="SlideNext" onClick={() => handleClickNextImg()}> */}
                            <div className="SlideNext" onClick={() =>handleClickBeforeImg(false)}>
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