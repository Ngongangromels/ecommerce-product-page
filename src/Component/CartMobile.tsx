import React from 'react'
import './CartMobile.css'
import iconDelete  from '../images/iconDelete.svg'

interface Props {
    cart: any[]
    onCleanCart: () => void
    onDeleteProduct: (id: number) => void
}

export const  CartMobile: React.FC<Props> = ({cart, onCleanCart, onDeleteProduct}) =>{
        const price = '125.00'
        const total = cart.reduce(
            (acc, cart) => acc + cart.count * 125.00,
            0
        )

    return (
        <div className='cart'> 
            <h2 style={{marginLeft: '40px'}}>Cart</h2>
            <hr style={{color: 'hsl(220, 13%, 13%)', fontWeight: 100}}/>
            {cart.length > 0 ? (
                 <div>
                        <ul> 
                            {cart.map(({count, image}, index) => (
                                <div key={index}>
                                <img className='img-cart'  src={image} alt="" /> <span className='desc-cart'>Fall Limited Edition Sneakers <br/>${price}*{count}  <strong> ${total}</strong> <img style={{cursor: 'pointer'}} onClick={() => onDeleteProduct(index)} src={iconDelete} alt="" /> </span> 
                                </div>
                            ))}
                    </ul>

                    <button  className='button-cart'
                    onClick={onCleanCart}
                    style={{
                        height: '55px',
                        width: '330px',
                        marginRight: '10px',
                        marginLeft: '35px',
                        marginBottom: '20px',
                        background: 'hsl(26, 100%, 55%)',
                        color: ' hsl(220, 13%, 13%)',
                        fontWeight: 600

                    }}>Checkout</button>
                 </div>
            ) : (<div className='cart-notice'><strong> Add the product </strong></div>)}
               
        </div>
    )
}

