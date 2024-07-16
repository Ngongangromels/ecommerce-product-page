import React, { useState } from "react";
import logo from "../images/logo.svg";
import iconCarte from "../images/iconCart.svg"
import imageAvatar from '../images/imageAvatar.png'
import { NavBarMenuItemMobile } from "./NavBarMenuItemMobile";
import './NavBarMobile.css'
import { CartMobile } from './CartMobile' 
import iconMenu from '../images/iconMenu.svg'
import iconClose from '../images/iconClose.svg'

export interface TNavbarItem {
  href: string;
  label: string; 
}

const NAV_BAR_ITEMS: TNavbarItem[] = [
  {
    href: "#Collection",
    label: "Collection",
  },
  {
    href: "#Men",
    label: "Men",
  },
  {
    href: "#Women",
    label: "Women",
  },
  {
    href: "#about",
    label: "About",
  },
 {
  href: "#Contact",
  label: "Contact"
 },
];

interface Props {
  count: number
  cart: any[]
  onCleanCart: () => void
  onDeleteProduct: (id: number) => void
}

export const NavBarMobile: React.FC<Props> = ({count, cart, onCleanCart, onDeleteProduct }) => {
  const [openCart, setOpenCart] = useState(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
    const handelToggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
    
    <nav className="navbar-mobile">
         <p className='btn-toggle-mobile' onClick={handelToggleMenu}>{showMenu ? (<img className='icon-toggle' src={iconClose} alt="" />) : (<img className='icon-toggle' src={iconMenu} alt="" />)}</p>
         {showMenu && (
               <div className="links-container-mobile">
               <ul className="links-items-mobile">
                 {NAV_BAR_ITEMS.map((item, idx) => (
                   <NavBarMenuItemMobile key={idx} menu={item} />
                 ))}
               </ul>
             </div>
         )}
      <div className="logo-nav-mobile">
        <img src={logo} alt="" />
      </div>
      
      <div className="sign-btn-mobile">
          <button onClick={() => setOpenCart(!openCart)} ><img src={iconCarte}  alt="" /> <span className="cart-count-mobile"> { cart.length }  </span></button>
          {openCart && <CartMobile onDeleteProduct={onDeleteProduct} onCleanCart={onCleanCart} cart={cart}/>}
          <p><img className="avatar-mobile" src={imageAvatar} alt="" /></p>
          
      </div>
    </nav>

   
   
  );
}
