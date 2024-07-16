import React, { useContext, useState } from 'react'
import imageProduct1 from '../images/imageProduct1.jpg'
import imageProduct1Thumbnail from '../images/imageProduct1Thumbnail.jpg'
import imageProduct2Thumbnail from '../images/imageProduct2Thumbnail.jpg'
import imageProduct3Thumbnail from '../images/imageProduct3Thumbnail.jpg'
import imageProduct4Thumbnail from '../images/imageProduct4Thumbnail.jpg'
import iconCarte from "../images/iconCart.svg";
import iconPlus from '../images/iconPlus.svg'
import iconMinus from '../images/iconMinus.svg'
import imageProduct2 from '../images/imageProduct2.jpg'
import imageProduct3 from '../images/imageProduct3.jpg'
import imageProduct4 from '../images/imageProduct4.jpg'
import './BodyMobile.css'
import iconNext from '../images/iconNext.svg'
import iconPrevious from '../images/iconPrevious.svg'
import { buttonContext } from '../Context/butonContext'
import Carousel from './Carousel'
import { CarouselMobile } from './CarouselMobile'


export interface TBodyElement {
    product?: any;
    catalogueProduct: any[];
    carouselProduct: any[];
    text: string;
    title: string;
    price: string;
}

const BODY_PAGE: TBodyElement = {
    product: imageProduct1,
    catalogueProduct: [imageProduct1Thumbnail, imageProduct2Thumbnail, imageProduct3Thumbnail, imageProduct4Thumbnail],
    carouselProduct: [imageProduct1, imageProduct2, imageProduct3, imageProduct4],
    text: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    title: 'Fall Limited Edition Sneakers',
    price: '$125.00'
}
interface Props   {
    count: any,
    onIncrease: () => void,
    onDecrease: () => void,
    onAddProduct: (count: any, image: any) => void
}


 export const BodyMobile: React.FC<Props> = ({ count, onIncrease, onDecrease, onAddProduct}) => { 
    const [currentIndex, setCurrentIndex] = useState(0);
      
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 === BODY_PAGE.catalogueProduct.length ? 0 : prevIndex + 1
      );
    };
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex - 1 < 0 ? BODY_PAGE.catalogueProduct.length - 1 : prevIndex - 1
      );
    };

    return (
        
            <div  className='body-bloc-mobile'>
                    <div className='body-bloc1-mobile'>
                        {/* <CarouselMobile images={BODY_PAGE.catalogueProduct}  /> */} <div className="carousel-images-mobile">
                        <img
                            key={currentIndex}
                            src={BODY_PAGE.catalogueProduct[currentIndex]}
                            alt=""
                        />
                        </div>
                        
                        <div className="slide_direction-mobile">
                            
                            <img style={{ left: '70%'}} className="left-mobile" onClick={handleNext }  src={iconNext} alt="" />  
                            <img style={{ right: '70%'}}  className="right-mobile" onClick={handlePrevious}  src={iconPrevious} alt="" />   
                        </div>
                        <div className="carousel-indicator-mobile ">
                        <ul className="carousel-catalogue-mobile">
                            {BODY_PAGE.catalogueProduct.map((_, index) => (
                                <p></p>
                            ))}
                        </ul>
                       </div>
                </div>
                    <div className='body-bloc2-mobile'>
                        <span style={{color:'hsl(220, 14%, 75%)', fontWeight: 400, marginLeft:'5px' }}>Sneaker Company</span>
                        <h1>{BODY_PAGE.title}</h1>
                        <p className='text-bloc-mobile'>{BODY_PAGE.text}</p>
                        <p><strong className='new-price-mobile'>{BODY_PAGE.price}</strong><span className='discount-price-mobile'>50%</span> <span className='old-price-mobile'>$250.00  </span></p>
                        <div className='bloc-btn-mobile'>
                            <button className='bloc-btn1-mobile'><span className='btn-minus-mobile'><img onClick={onDecrease} src={ iconMinus } alt="" /></span> <span>{count} </span>  <span style={{left: '130px'}} className='btn-plus'><img onClick={onIncrease} src={iconPlus} alt="" /></span> </button>
                            <button  onClick={() => onAddProduct(count, BODY_PAGE.product)} className='bloc-btn2-mobile'><span style={{color: 'red'}}><img src={iconCarte} alt="" /></span> <span>Add to cart</span> </button>
                        </div>
                    </div>
                   
            </div>
        
    )
}
