import Image from "next/image"


interface CardProps {
    image: string,
    title: string,
    body: string,
}

export default function Card({ image, title, body }:CardProps) {

    const Img = () => <div className="  w-full p-4 bg-primary-100 flex items-center justify-center">
        <Image alt={title} src={image} width={256} height={256} />
    </div>
   
    const Title = () => <div className=' text-2xl px-4 pt-4 font-medium'>
        {title}
    </div>

    const Body = () => <div className=' text-lg px-4 pt-3 '>
        {body}
    </div>

    return (
        <div className=' flex flex-col h-[450px] flex-none border-2 rounded-md shadow-md lg:w-[30%] w-auto '>
            <Img/>
            <Title/>
            <Body/>
        </div>
    )
}