
import { HtmlHTMLAttributes } from "react";

interface SVGAttributesProps extends React.SVGProps<SVGSVGElement> {}

export default function Facebook( props : SVGAttributesProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" {...props} viewBox="0,0,256,256" style={ { fill:"#000000" } }>
        <g fill="#ffffff" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={ { mixBlendMode:"normal" } }>
            <g transform="scale(5.12,5.12)">
                <path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37,19h-2c-2.14,0 -3,0.5 -3,2v3h5l-1,5h-4v15h-5v-15h-4v-5h4v-3c0,-4 2,-7 6,-7c2.9,0 4,1 4,1z">
                </path>
            </g>
        </g>
        </svg>
    )
}