import { Truck } from "@phosphor-icons/react";

interface CardServicesProps {
    icon: JSX.Element,
    title: string,
    content: string
}

export function CardServices({ icon, title, content }: CardServicesProps) {
    return (
        <div className='flex flex-row gap-2 md:w-96 md:h-52 lg:w-96 lg:h-48 border border-zinc-300 shadow-md p-3 rounded-xl bg-zinc-100 hover:border-lime-400'>
            <div className='text-4xl lg:text-5xl items-center text-center justify-center flex'>{icon}</div>
            <div className='items-start ml-3 flex flex-col md:gap-3 lg:gap-6 w-full mt-2'>
                <span className='font-bold text-lg lg:text-xl'>{title}</span>
                <p className='text-sm lg:text-base text-zinc-600'>{content}</p>
            </div>
        </div>
    )
}