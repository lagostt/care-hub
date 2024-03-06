import Link from "next/link"
import Logo from "../Logo"
import { items } from "./footerItems"
import Twitter from "../icons/Twitter"
import Facebook from "../icons/Facebook"
import Linkedin from "../icons/Linkedin"

interface FooterItem {
    name: string,
    url: string
}

export default function FooterNavItems() {

    const iconSize = 48
    const FooterItem = ({ name, url }: FooterItem) => 
    <Link href={url} className="px-5 text-lg lg:basis-1/5 basis-1 ">
        {name}
    </Link>

    return (
        <div className="flex lg:flex-row flex-col gap-y-5 w-full lg:justify-between items-center justify-center"> 
            <Logo link="/home"/>
            <div className=" flex justify-center items-center lg:flex-row lg:justify-normal lg:items-start w-full h-auto ">
              {
                 items.map( ({ name, url }) => <FooterItem key= { name } name={ name } url={ url } /> )
              }
            </div>
            <div className="flex lg:flex-row ">
                <Twitter className=" px-2 " width={iconSize} height={iconSize}/>
                <Facebook className=" px-2 " width={iconSize} height={iconSize}/>
                <Linkedin className=" px-2 " width={iconSize} height={iconSize}/>
            </div>
        </div>
    )
}