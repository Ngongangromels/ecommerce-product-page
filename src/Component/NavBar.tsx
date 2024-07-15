import React, { useState } from "react";
import logo from "../images/logo.svg";
import iconCarte from "../images/iconCart.svg"
import imageAvatar from '../images/imageAvatar.png'
import { NavBarMenuItem } from "./NavBarMenuItem";
import './NavBar.css'
import {Cart} from "./Cart";

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

export const NavBar: React.FC<Props> = ({count, cart, onCleanCart, onDeleteProduct }) => {
  const [openCart, setOpenCart] = useState(false)
  return (
    
    <nav className="navbar">
      <div className="logo-nav">
        <img src={logo} alt="" />
      </div>
      <div className="links-container">
        <ul className="links-items">
          {NAV_BAR_ITEMS.map((item, idx) => (
            <NavBarMenuItem key={idx} menu={item} />
          ))}
        </ul>
      </div>
      
      <div className="sign-btn">
          <button onClick={() => setOpenCart(!openCart)} ><img src={iconCarte}  alt="" /> <span className="cart-count"> { cart.length }  </span></button>
          {openCart && <Cart onDeleteProduct={onDeleteProduct} onCleanCart={onCleanCart} cart={cart}/>}
          <p><img className="avatar" src={imageAvatar} alt="" /></p>
          
      </div>
    </nav>

   
   
  );
}

