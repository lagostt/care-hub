import Link from "next/link";
import GoUpWardButton from "./copyright/GoUpWardButton";

export default function CopyRight() {

    
    return (
        <div className=" flex lg:flex-row flex-col lg:justify-between justify-center items-center gap-y-5 w-full h-auto">
            <div className="text-white text-base text-center lg:text-left">
                  © 2024 Care Hub, Inc. All Rights Reserved.
            </div>
            <GoUpWardButton/>
        </div>
    )
}