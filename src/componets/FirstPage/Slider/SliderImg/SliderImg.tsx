import SliderImgStyled from './SliderImgStyled';
import { useEffect, useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const slides: string[] = [
    "/images/slider/buffler.jpg",
    "/images/slider/frapp.jpg",
    "/images/slider/social_slider.jpg",
]
const SliderImg = () => {
    const [indexImg, setIndexImg] = useState(0);
    const makeCycle = () => {
        if (indexImg < slides.length - 1) {
            setIndexImg(indexImg + 1)
        } else {
            setIndexImg(0)
        }
    }
    useEffect(() => {
        const slider = setInterval(makeCycle, 2000)
        return () => {
            clearInterval(slider);
        }
    }, [indexImg])

    const handleClickImg = (isForward: boolean) => {
        if (isForward) {
            if (indexImg >= 1) {
                setIndexImg(indexImg - 1)
            } else {
                setIndexImg(slides.length - 1)
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
                    <div className="CaruselConteiner">
                        <div className="SlideSelect" onClick={() => handleClickImg(true)}>
                            <NavigateBeforeIcon className="Arrow" />
                        </div>
                        <img className="CaruselImg" src={slides[indexImg]} />
                        <div className="SlideSelect" onClick={() => handleClickImg(false)}>
                            <NavigateNextIcon className="Arrow" />
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </SliderImgStyled>
    )
}

export default SliderImg;