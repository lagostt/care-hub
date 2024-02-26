"use client"
import { cookies } from "next/headers"
import NavBar from "./navbar/NavBar"
import { landingPageItems } from "./navbar/navItems"
import NavButton from "./navbar/NavButton"
import Logo from "./Logo"
import { useState } from "react"
import Menu from "./icons/Menu"
import Drawer from "./drawer/Drawer"



export default function Header(){

    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    return (
        <header className=" flex flex-row items-center w-full h-[10vh] lg:px-12 px-9 py-6 border-b border-slate-900/10 ">
            <Logo link="/"/>
            <NavBar items={landingPageItems} className=" ml-auto " />
            <div className=" hidden lg:flex items-center border-l border-stale-200 ml-6 pl-6 ">
               <NavButton link="/login" name="Login" />
            </div>
            <Menu width="32" height="32" className=" lg:hidden ml-auto "  onClick={() => setDrawerIsOpen(!drawerIsOpen)}/>
            <Drawer links={landingPageItems} isOpen={drawerIsOpen} closeDrawer={() => setDrawerIsOpen(!drawerIsOpen)}/>
        </header>
        
    )
}