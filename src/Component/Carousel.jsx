import { useContext, useState } from "react";
import { buttonContext } from "../Context/butonContext";
import iconNext from '../images/iconNext.svg'
import iconPrevious from '../images/iconPrevious.svg'
import iconClose from '../images/iconClose.svg'


function Carousel({images, onClose}) {
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
        const handleDotClick = (index) => {
          setCurrentIndex(index);
        };

        // const {image} = useContext(buttonContext)
    return (
        <div className='carousel'>
          <img onClick={onClose} className="btn-close" src={iconClose} alt="" />
            <div className="carousel-images">
            <img
                key={currentIndex}
                src={images[currentIndex]}
                alt=""
            />
            </div>
            
            <div className="slide_direction">
                <div className="left" onClick={handlePrevious}>
                <img src={iconPrevious} alt="" />
                   
                    
                </div>
                <div className="right" onClick={handleNext}>
                   
                <img src={iconNext} alt="" />
                    
                </div>
            </div>
            <div className="carousel-indicator ">
              <ul className="carousel-catalogue">
                  {images.map((_, index) => (
                    <li
                    key={index}
                    className={`dot ${currentIndex === index ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                    >
                      <img style={{height: '90px', width: '90px', }} src={_} alt="" />
                    </li>
                ))}
              </ul>
            
            </div>
        </div>
                
 
    )
}

export default Carousel
