import Link from "next/link";

export default function NavLink({
    props:{name, link, basis}
}:{
    props:{ name:string, link:string, basis:string }
}){
    return (
        <Link href={link} className={`hover:text-primary ${basis}`}>
            {name}
        </Link>
    )
}