"use client"
import ArrowUp from "../../icons/ArrowUp";

export default function GoUpWardButton() {

    const isBrowser = () => typeof window !== 'undefined'

    function scrollToTop(){
        if(!isBrowser) return;
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <div className="group flex flex-row w-auto h-auto gap-1 uppercase" onClick={scrollToTop}>
            <div className="text-white text-base group-hover:text-red-400 group-hover:cursor-pointer">
                to the top
            </div>
            <ArrowUp width={24} className="group-hover:fill-red-400 fill-white group-hover:cursor-pointer" />
        </div>
    )
}