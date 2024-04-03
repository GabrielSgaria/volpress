'use client'

import { CardFrota } from '@/components/card-frota'
import { ClientsCarrousel } from '@/components/carrousel-clients'
import { NavBar } from '@/components/nav-bar'
import Image from 'next/image'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'

export default function Home() {

  return (
    <div className="h-[2000px] bg-white text-zinc-950">
      <NavBar />
      <section className="flex flex-row w-full h-[600px] items-center" >
        <div className='container mx-auto px-8 flex z-30 -mt-36 bg-transparent' >
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
      </section>

      <div>
        <div className='flex flex-col container mx-auto justify-center items-center z-40 relative mt-28 gap-9'>
          <h1 className='font-black text-4xl uppercase text-zinc-800'>NOSSOS CLIENTES</h1>
          <p className='max-w-[650px] text-center text-zinc-600'>Nossos clientes são de extrema importância para nós, e valorizamos cada um deles de forma igualitária. Aqui estão alguns exemplos destacados</p>
        </div>
        <ClientsCarrousel />
      </div>
      <section className='w-full py-10 bg-zinc-900 mt-20'>
        <div className='container mx-auto flex items-center gap-20 flex-col '>
          <div className='flex flex-col container mx-auto justify-center items-center z-40 relative mt-8 gap-5'>
            <h1 className='font-black text-4xl uppercase text-zinc-200'>Nossa Frota</h1>
            <p className='max-w-[700px] text-center text-zinc-200'>Nossa frota é moderna e padronizada para atender às exigências dos clientes. Utilizamos carretas LS e Vanderleia,
              com no mínimo 14 metros de comprimento e equipadas com bobineiras para maior flexibilidade no transporte.
              Isso nos permite oferecer maior capacidade de carga, resultando em melhor custo-benefício para os clientes.</p>
          </div>
          <CardFrota />
        </div>
      </section>


    </div >
  )
}





