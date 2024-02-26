import Image from 'next/image'

export default function Hero(){
    return (
        <div className='relative lg:h-[90vh] h-[70vh] w-full '>
            <Image src='/image/hero.jpg' alt='hero' fill={true} objectFit='cover' />
            <div className=' absolute inset-0 flex flex-col justify-end items-center bg-gradient-to-t from-slate-800 to-transparent '>
             <div className=' lg:text-4xl lg:text-center px-5 text-left text-2xl text-white font-bold pb-10'>
                  Welcome to Care Hub, Your Trusted Partner in Health & Wellness!
             </div>
            </div>
        </div>
    )
}