import Link from "next/link";

interface NavLinkProps {
    content: string,
    link: string,
}

export default function NavLink({ content, link }: NavLinkProps){
    return (
        <Link href={link} className="hover:text-primary-100 transition-colors duration-300 ">
            {content}
        </Link>
    )
}