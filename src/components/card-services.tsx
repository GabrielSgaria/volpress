import { Truck } from "@phosphor-icons/react";

interface CardServicesProps {
    icon: JSX.Element,
    title: string,
    content: string
}

export function CardServices({ icon, title, content }: CardServicesProps) {
    return (
        <div className='flex flex-row gap-2 w-96 h-48 border border-zinc-300 shadow-md p-3 rounded-xl'>
            <div className='text-5xl items-start text-start justify-start'>{icon}</div>
            <div className='items-start ml-3 flex flex-col gap-6 w-full mt-2'>
                <span className='font-bold text-xl'>{title}</span>
                <p className='text-base text-zinc-600'>{content}</p>
            </div>
        </div>
    )
}