import { HtmlHTMLAttributes } from "react";

interface SVGAttributesProps extends React.SVGProps<SVGSVGElement> {}

export default function Twitter( props : SVGAttributesProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" {...props} viewBox="0,0,256,256" style={{fill:"#000000"}}>
            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode:"normal"}}>
               <g transform="scale(5.12,5.12)">
                 <path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z">
                 </path>
                </g>
            </g>
        </svg>
    )
}