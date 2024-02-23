import NavLink from "./NavLink";
import { NavItemData } from "./navItems";

interface NavBarProps {
    items: NavItemData[],
    className?: string 
}

export default function NavBar( {items, className}: NavBarProps ){
    return(
        <div className={` hidden lg:flex space-x-8  ${className ?? '' } `}>
            {
             items.map(({ link, name }) => 
              <NavLink key={name} content={name} link={link} />
             )
            }
        </div>
    )
}