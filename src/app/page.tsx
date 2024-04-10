'use client'

import { CardFrota } from '@/components/card-frota'
import { ClientsCarrousel } from '@/components/carrousel-clients'
import { NavBar } from '@/components/nav-bar'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs'
import 'swiper/css/free-mode'
import { SobreNos } from '@/components/sobreNos'
import { Footer } from '@/components/footer'


export default function Home() {

  return (
    <div className="h-[2000px] bg-white text-zinc-950">
      <section className=" bg-cover bg-center bg-no-repeat bg-[url('../../public/image/caminhao1.jpg')] shadow-2xl"  >
        <NavBar />
        <div className='flex flex-row w-full h-[800px] items-center '>
          <div className='container mx-auto px-8 flex z-30 -mt-72' >
            <div className='w-full flex flex-col items-center'>
              <h1 className="text-5xl text-center font-black lg:text-6xl uppercase text-zinc-900 tracking-widest text-shadow-md shadow-slate-900/60">
                VOLPRESS TRANSPORTES
              </h1>
              <h1 className="mb-10 -mt-2 text-4xl text-center font-extrabold opacity-60 lg:text-base uppercase text-zinc-950 ">
                atuando desde 1996.
              </h1>

              <p className="mb-10 text-lg font-medium w-full  text-center lg:max-w-2xl lg:text-xl italic text-zinc-800 text-shadow-sm shadow-slate-900/60 ">
                "Transporte de cargas é a nossa vocação. Ao contratar a Volpress, você mantém o foco nos negócios, enquanto transportamos sua carga com excelência!"
              </p>

              <button className="cursor-pointer px-3 font-bold transition-all duration-300 w-96 text-center shadow-md bg-lime-400/85 py-3 rounded-2xl text-lg text-zinc-950/85 hover:bg-lime-400 hover:text-zinc-950">
                Fale Conosco
              </button>
            </div>
          </div>
        </div>
      </section>

      <SobreNos />
      
      <section className='w-full py-24 bg-zinc-50 '>
        <div className='container mx-auto flex items-center gap-20 flex-col '>
          <div className='flex flex-col container mx-auto justify-center items-center z-40 relative gap-5'>
            <h1 className='font-black text-4xl uppercase text-zinc-700'>Nossa Frota</h1>
            <p className='max-w-[700px] text-center text-zinc-900'>Nossa frota é moderna e padronizada para atender às exigências dos clientes. Utilizamos carretas LS e Vanderleia,
              com no mínimo 14 metros de comprimento e equipadas com bobineiras para maior flexibilidadenpm run dev no transporte.
              Isso nos permite oferecer maior capacidade de carga, resultando em melhor custo-benefício para os clientes.</p>
          </div>
          <CardFrota />
        </div>
      </section>
      <div className='bg-zinc-200 py-16'>
        <div className='flex flex-col container mx-auto justify-center items-center z-40 relative gap-9'>
          <h1 className='font-black text-4xl uppercase text-zinc-800'>NOSSOS CLIENTES</h1>
          <p className='max-w-[650px] text-center text-zinc-600'>Nossos clientes são de extrema importância para nós, e valorizamos cada um deles de forma igualitária. Aqui estão alguns exemplos destacados</p>
        </div>
        <ClientsCarrousel />
      </div>
      <section>

      </section>

    <Footer />
    </div >
  )
}





