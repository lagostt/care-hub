import Close from "../icons/Close"
import NavLink from "../navbar/NavLink"
import { NavItemData } from "../navbar/navItems"

interface DrawerProps {
    isOpen: boolean
    links: NavItemData[]
    closeDrawer:()=> void
}

export default function Drawer({ isOpen, links, closeDrawer }: DrawerProps){
    return (
        <>
        <div className={`${isOpen ? "opacity-30" : "opacity-0 pointer-events-none" } lg:hidden fixed inset-0 bg-black  z-10 transition-opacity ease-in-out duration-300  `}></div>
        <div className={`fixed lg:hidden inset-y-0 right-0 bg-white max-w-xs transform transition-transforml duration-300 z-20 shadow-lg w-full ${isOpen? "translate-x-0" : "translate-x-full"} `}>
            
            <div className="flex flex-col items-start space-y-8 lg:px-12 px-9 pt-5 ">
                <div className=" flex justify-end w-full">
                    <Close width="32" height="32" onClick={closeDrawer} />
                </div>
                <div className="flex flex-col space-y-6 w-full">
                  {
                   links.map(({ link, name  }) => 
                      <NavLink key={`drawer-${name}`} link={link} content={name} />
                    )
                  }
               </div>
            </div>
        </div>
        </>
    )
}