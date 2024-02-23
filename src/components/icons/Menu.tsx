import { HtmlHTMLAttributes } from "react";

interface SVGAttributesProps extends React.SVGProps<SVGSVGElement> {}

export default function Menu( props : SVGAttributesProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 -960 960 960" >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
        </svg>
    )
}