import { NavBar } from '@/components/nav-bar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <NavBar />
      <section className="flex flex-col items-center justify-center bg-zinc-50 text-zinc-950 lg:flex-row">
        <div className="container mx-auto px-28 lg:w-1/2">
          <h1 className="mb-6 max-w-lg text-5xl font-black lg:max-w-none lg:text-6xl">
            VOLPRESS
          </h1>
          <p className="mb-8 max-w-lg text-lg font-medium lg:max-w-xl lg:text-xl">
            A Volpress Transportes é referência no segmento de transportes
            rodoviários de cargas, reconhecida pela qualidade, confiança e
            inovação na prestação de seus serviços, atuando desde 1996.
          </p>
          <button className="rounded-full bg-gradient-to-b from-lime-500 to-lime-400 px-8 py-3 text-lg font-bold shadow-xl hover:to-lime-500">
            FALE CONOSCO
          </button>
        </div>
        <div className="relative w-full lg:w-1/2">
          <Image
            src="/image/bg-truck-top.jpg"
            alt="Background"
            width={900}
            height={900}
            className="object-cover lg:object-fill"
          />
        </div>
      </section>
    </div>
  )
}
