import Image from "next/image";
import tire1 from '../../public/image/itemsPngs/1.png'
import tire2 from '../../public/image/itemsPngs/2.png'
import tire3 from '../../public/image/itemsPngs/3.png'
import tire4 from '../../public/image/itemsPngs/4.png'


export function SectionHeader() {
    return (

        <section className="flex flex-row w-full h-[600px] items-center" >
            <div className='container mx-auto px-8 flex z-30 -mt-36 bg-transparent' >
                <div className='w-full flex flex-col'>
                    <h1 className="-mb-2 text-5xl font-black lg:text-6xl uppercase text-zinc-900 tracking-widest text-shadow-md shadow-slate-900/60">
                        VOLPRESS TRANSPORTES
                    </h1>
                    <h1 className="mb-10 ml-3 text-4xl font-extrabold opacity-75 lg:text-base uppercase text-zinc-950">
                        atuando desde 1996.
                    </h1>

                    <p className="mb-10 text-lg font-medium lg:max-w-2xl lg:text-xl italic text-zinc-800 ">
                        "Transporte de cargas é a nossa vocação. Ao contratar a Volpress, você mantém o foco nos negócios, enquanto transportamos sua carga com excelência!"
                    </p>

                    <button className="cursor-pointer px-3 font-bold transition-all duration-300 w-44 text-center shadow-md bg-lime-400 py-3 rounded-2xl text-lg text-zinc-950 hover:bg-lime-500">
                        Fale Conosco
                    </button>
                </div>
            </div>
            <div className='absolute z-10'>
                <Image width={9000} height={9000} src="/image/polygon1.png" alt='polygon img' />

            </div>

            <div className="absolute right-0 w-[800px] z-0 top-52">
                <Image
                    src="/image/bg-truck-top.jpg"
                    alt="Background"
                    width={9000}
                    height={9000}
                />
            </div>
            <Image width={9000} height={9000} src={tire1} alt='tire' className='absolute z-10 w-[900px] -rotate-[2deg] top-40 opacity-25 overflow-hidden' />
        </section>
    )
}


