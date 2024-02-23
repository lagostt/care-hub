import { cookies } from "next/headers"
import NavBar from "./navbar/NavBar"
import { landingPageItems } from "./navbar/navItems"
import NavButton from "./navbar/NavButton"
import Logo from "./Logo"

export default function Header(){
    return (
        <header className=" flex flex-row items-center w-full h-[5%] px-12 py-4 border-b border-slate-900/10   ">
            <Logo link="/"/>
            <NavBar items={landingPageItems} className=" ml-auto " />
            <div className=" flex items-center border-l border-stale-200 ml-6 pl-6">
               <NavButton link="/login" name="Login" />
            </div>
        </header>
    )
}