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
      <section className="bg-cover bg-top bg-no-repeat bg-[url('../../public/image/daf.jpg')]"  >
      <NavBar />
        <div className='flex flex-row w-full h-[800px] items-center '>
          <div className='container mx-auto px-8 flex z-30 -mt-[450px] bg-transparent' >
            <div className='w-full flex flex-col items-end'>
              <h1 className="-mb-2 text-5xl text-end font-black lg:text-6xl uppercase text-zinc-900 tracking-widest text-shadow-md shadow-slate-900/60">
                VOLPRESS TRANSPORTES
              </h1>
              <h1 className="mb-10 ml-3 text-4xl text-end font-extrabold opacity-75 lg:text-base uppercase text-zinc-950 ">
                atuando desde 1996.
              </h1>

              <p className="mb-10 text-lg font-medium w-full  text-end lg:max-w-2xl lg:text-xl italic text-zinc-800 text-shadow-sm shadow-slate-900/60 ">
                "Transporte de cargas é a nossa vocação. Ao contratar a Volpress, você mantém o foco nos negócios, enquanto transportamos sua carga com excelência!"
              </p>

              {/* <button className="cursor-pointer px-3 font-bold transition-all duration-300 w-44 text-center shadow-md bg-lime-400 py-3 rounded-2xl text-lg text-zinc-950 hover:bg-lime-500">
                Fale Conosco
              </button> */}
            </div>
          </div>
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





