import Link from "next/link";
import { NavItemData } from "./navItems";

export default function NavButton({ link, name, className }: NavItemData){
    return (
        <Link href={link} 
         className={
            `border-2 border-primary-100 rounded  text-primary-100 py-1 px-3
             hover:border-primary-200 hover:text-primary-200 transition-colors
              duration-300 ${className ?? ''}`}>
            {name}
        </Link>
    )
}