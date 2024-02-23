import Link from "next/link"

interface LogoProps {
    link: string,
    className?: string 
}
export default function Logo({ link, className }: LogoProps){
    return (
        <Link href={link} className={` select-none text-nowrap text-2xl font-fredoka text-primary-100 ${className ?? ''}`}>
            Care Hub
        </Link>
    )
}