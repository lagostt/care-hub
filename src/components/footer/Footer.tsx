import CopyRight from "./CopyRight";
import FooterNavItems from "./FooterNavItems";

export default function Footer(){
    return (
        <div className=" flex flex-col lg:h-auto h-[410px]  w-full  bg-primary-300 text-white py-5 lg:px-gpx px-spx">
            <FooterNavItems/>
            <p className=" w-full lg:px-gpx px-spx h-[1px] mb-1 bg-white"></p>
            <CopyRight/>
        </div>
    )
}