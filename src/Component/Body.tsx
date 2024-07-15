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
import './Body.css'
import { buttonContext } from '../Context/butonContext'
import Carousel from './Carousel'


export interface TBodyElement {
    product?: any;
    catalogueProduct?: any[];
    carouselProduct?: any[];
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


 export const Body: React.FC<Props> = ({ count, onIncrease, onDecrease, onAddProduct}) => { 


    const { showBackground, onOpen} = useContext(buttonContext)
    
    return (
        
            <div  className='body-bloc'>
                    <div className='body-bloc1'>
                        <img className='img-bloc' src={BODY_PAGE.product} alt="" />
                        <ul className='catalogue-product'>
                            {BODY_PAGE.catalogueProduct?.map((items, id) => ( 
                                <li onClick={onOpen}  key={id}> <img   src={items} alt="" />  </li>       
                            ))}
                         </ul> 
                    </div>
                    <div className='body-bloc2'>
                        <span style={{color:'hsl(220, 14%, 75%)', fontWeight: 500 }}>Sneaker Company</span>
                        <h1>{BODY_PAGE.title}</h1>
                        <p className='text-bloc'>{BODY_PAGE.text}</p>
                        <p><strong className='new-price'>{BODY_PAGE.price}</strong><span className='discount-price'>50%</span></p>

                        <span className='old-price'>$250.00  </span>
                        <div className='bloc-btn'>
                            <button className='bloc-btn1'><span className='btn-plus'><img onClick={onDecrease} src={ iconMinus } alt="" /></span> {count}  <span className='btn-minus'><img onClick={onIncrease} src={iconPlus} alt="" /></span> </button>
                            <button onClick={() => onAddProduct(count, BODY_PAGE.product)} className='bloc-btn2'><span><img src={iconCarte} alt="" /></span> <span>Add to cart</span> </button>
                        </div>
                    </div>
                    {showBackground && <dialog open style={{
                         position: 'absolute',
                         width: '100%',
                         height: '100%',
                         margin: '0',
                         padding: '0',
                         background: 'hsla(0, 75%, 0%, 0.88)'
                         
                         }}> <Carousel images={BODY_PAGE.carouselProduct} onClose={onOpen} /> </dialog>}
            </div>
        
    )
}


