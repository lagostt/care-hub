import Image from 'next/image'

export default function Hero(){
    return (
        <div className='relative h-[550px] w-full '>
            <Image src='/image/hero.jpg' alt='hero' fill={true} style={{objectFit:"cover"}} />
            <div className=' lg:px-12 px-9 absolute inset-0 flex flex-col justify-end items-start bg-gradient-to-t from-slate-800 to-transparent '>
               <div className=' lg:text-4xl text-2xl text-left text-white font-bold pb-6'>
                   Welcome to Care Hub, Your Trusted Partner in Health & Wellness!
               </div>
               <div className=' lg:text-lg text-base text-neutral-200 pb-10 text-left font-medium'>
                   Discover a compassionate approach to your well-being at Care Hub. With us, you&apos;re more than a patient – you&apos;re a valued partner in your journey to health and wellness.
               </div>
            </div>
        </div>
    )
}