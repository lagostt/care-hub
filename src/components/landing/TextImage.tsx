import Image from "next/image";

export default function TextImage() {

    const TextSection = ({ title, body, style }: { title: string, body: string, style:string }) => 
    <div className={`flex flex-col w-auto items-start justify-center lg:pt-0 pt-8 ${style} basis-1/2`}>
        <div className=" lg:text-2xl text-xl font-medium text-left ">
            {title}
        </div>
        <div className=" lg:text-lg text-base  text-left pt-3">
            {body}
        </div>
    </div>

    return (
        <div className=" flex flex-col items-center lg:px-12 px-9 py-5 mt-10 bg-slate-50 ">
            <div className="flex lg:flex-row flex-col w-full justify-center items-center lg:gap-[5%] ">
               <TextSection 
                 style=" lg:order-1 order-2"
                 title="We want you comfortable"
                 body="At Care Hub Clinic, we prioritize your comfort. Our welcoming environment and compassionate staff ensure you feel at ease throughout your visit. Experience personalized care in a setting designed to make you feel relaxed and supported. Welcome to Care Hub Clinic, where your comfort is our priority."
                />
               <div className="flex flex-row lg:justify-end justify-center lg:order-2 order-1">
                 <Image src='/image/patient_1.jpg' alt='comfortable' width={500} height={300} className=" basis-1/2 shadow-md rounded-md"/>
               </div>
            </div>
            <div className="flex lg:flex-row flex-col w-full justify-center items-center mt-10 lg:gap-[5%] ">
               <div className="flex flex-row lg:justify-start justify-center">
                 <Image src='/image/equipment_1.jpg' alt='equipment' width={500} height={100} className=" basis-1/2 shadow-md rounded-md " />
               </div>
               <TextSection 
                 style=""
                 title="Best equipments"
                 body="Experience advanced care with our cutting-edge technology at Care Hub Clinic. Our state-of-the-art equipment ensures precision and efficiency in diagnosis and treatment. Welcome to modern healthcare at Care Hub Clinic."
                />
            </div>
        </div>
    )
}