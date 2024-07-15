import { FC } from "react";
import { TNavbarItem } from "./NavBar";

interface Props {
  menu: TNavbarItem;
}

export const NavBarMenuItem: FC<Props> = ({ menu }) => {
  
  return (
    <ul className="nav-item">
      <li className="element-line"><a href={menu.href}>{menu.label}</a></li>
    </ul>
    
  );
};
