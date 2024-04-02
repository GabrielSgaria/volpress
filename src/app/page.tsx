import { ClientsCarrousel } from '@/components/carrousel-clients'
import { NavBar } from '@/components/nav-bar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-[2000px] bg-zinc-50 text-zinc-950">
      <NavBar />
      <section className="flex flex-row w-full h-[550px] items-center" >
        <div className='container mx-auto px-8 flex z-30 ' >
          <div className='w-full flex flex-col gap-'>
            <h1 className="mb-6 text-5xl font-black lg:text-6xl uppercase text-zinc-900">
              atuando desde 1996.
            </h1>

            <p className="mb-8 text-lg font-medium lg:max-w-2xl lg:text-xl italic text-zinc-800 ">
              "Transporte de cargas é a nossa vocação. Ao contratar a Volpress, você mantém o foco nos negócios, enquanto transportamos sua carga com excelência!"
            </p>

            <button className="cursor-pointer px-3 font-bold transition-all duration-300 w-44 text-center shadow-md bg-lime-400 py-3 rounded-2xl text-lg text-zinc-950 hover:bg-lime-500">
              Fale Conosco
            </button>
          </div>
        </div>

        <div className="absolute right-0 w-[800px] z-0 top-52 ">
          <Image
            src="/image/bg-truck-top.jpg"
            alt="Background"
            width={9000}
            height={9000}
          />
        </div>
      </section>
      <div className=' mt-20'>
      <ClientsCarrousel />
      </div>
    </div>
  )
}





