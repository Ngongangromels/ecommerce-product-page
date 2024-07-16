import { FC } from "react";
import './NavBarMobile.css';
import { TNavbarItem } from "./NavBar";

interface Props {
  menu: TNavbarItem;
}

export const NavBarMenuItemMobile: FC<Props> = ({ menu }) => {
  
  return (
    <ul className="nav-item-mobile">
      <li className="element-line"><a href={menu.href}>{menu.label}</a></li>
    </ul>
    
  );
};
