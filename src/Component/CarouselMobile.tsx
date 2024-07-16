import {  useState } from "react";
import './CarouselMobile.css'
import iconNext from '../images/iconNext.svg'
import iconPrevious from '../images/iconPrevious.svg'

interface Props {
    images: any[]
}

export const  CarouselMobile: React.FC<Props> = ({images}) => {
        const [currentIndex, setCurrentIndex] = useState(0);
      
        const handleNext = () => {
          setCurrentIndex((prevIndex) =>
            prevIndex + 1 === images.length ? 0 : prevIndex + 1
          );
        };
        const handlePrevious = () => {
          setCurrentIndex((prevIndex) =>
            prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
          );
        };
       
        
    return (
        <div className='carousel-mobile'>
            <div className="carousel-images-mobile">
            <img
                key={currentIndex}
                src={images[currentIndex]}
                alt=""
            />
            </div>
            
            <div className="slide_direction-mobile">
                
                <img className="left-mobile" onClick={handleNext }  src={iconNext} alt="" />  
                <img  className="right-mobile" onClick={handlePrevious}  src={iconPrevious} alt="" />   
            </div>
            <div className="carousel-indicator-mobile ">
              <ul className="carousel-catalogue-mobile">
                  {images.map((_, index) => (
                    <li
                    key={index}
                    >
                    </li>
                ))}
              </ul>
            
            </div>
        </div>
                
 
    )
}