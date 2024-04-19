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
import { Truck, TruckTrailer } from '@phosphor-icons/react';
import { CardServices } from '@/components/card-services';
import Image from 'next/image';
import mapaCobertura from '../../public/image/map.png'
import { DotFilledIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion'
import { ButtonWhatsAppFixed } from '../components/button-whatsapp-fixed';


export default function Home() {
  function sendMensage(numeroTelefone: number, mensagemPadrao: string) {
    var linkWhatsApp =
      "https://wa.me/" +
      numeroTelefone +
      "?text=" +
      encodeURIComponent(mensagemPadrao);

    window.open(linkWhatsApp, "_blank");
  }

  return (
    <div className="h-[2000px] bg-white text-zinc-950">
      <section className="bg-cover bg-top bg-no-repeat from-cyan-500 to-blue-500 bg-[url('../../public/image/frota/frotabg.jpg')] shadow-2xl"  >
        <NavBar />
        <div className='flex flex-row w-full h-[650px] sm:h-[700px] items-center '>
          <div className='container mx-auto px-8 flex z-30 -mt-40' >
            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.7 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className='w-full flex flex-col items-center'>
              <h1 className="mt-36 sm:mt-0 text-4xl text-center font-black lg:text-6xl uppercase text-zinc-50 tracking-widest text-shadow-md shadow-slate-900/60">
                VOLPRESS TRANSPORTES
              </h1>
              <h1 className="mb-14 sm:mb-10 -mt-2 text-base text-center font-extrabold opacity-60 uppercase text-zinc-50 ">
                atuando desde 1996.
              </h1>

              <p className="mb-24 sm:mb-10 text-base sm:text-lg font-medium w-full text-center lg:max-w-2xl italic text-zinc-50 text-shadow-sm shadow-slate-900/60 ">
                "Transporte de cargas é a nossa vocação. Ao contratar a Volpress, você mantém o foco nos negócios, enquanto transportamos sua carga com excelência!"
              </p>

              <button
                onClick={() =>
                  sendMensage(
                    5541995020104,
                    "Olá! Vim através do site da Volpress!."
                  )
                }
                className="cursor-pointer px-3 font-bold transition-all duration-300 w-96 text-center shadow-md bg-lime-500 py-3 rounded-2xl text-lg text-zinc-950/85 hover:bg-lime-400 hover:text-zinc-950">
                Fale Conosco
              </button>
            </motion.div>
          </div>
        </div>
      </section >
      <section className='bg-zinc-200 py-16' id='services'>
        <div className='flex flex-col container mx-auto justify-center items-center z-40 relative gap-9'>
          <h1 className='font-black text-3xl sm:text-4xl uppercase text-zinc-700'>SERVIÇOS VOLPRESS</h1>
          <p className='max-w-[650px] text-center text-zinc-600 px-3'>Seja qual for o serviço contratado, não abrimos mãos da pontualidade e segurança, pontualidade é a nossa meta diária, e segurança a nossa obsessão. </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.7 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col sm:flex-row container mx-auto items-center sm:justify-around gap-10 md:gap-6 lg:gap-2 mt-10 px-3 sm:px-0 lg:px-5'>
          <CardServices icon={<Truck />} title='Paineis de madeira' content='Transporte seguro e pontual de painéis de madeira, preservando a integridade do material.' />
          <CardServices icon={<TruckTrailer />} title='Alimentos Paletizados' content='Entrega confiável e higiênica de alimentos paletizados, seguindo rigorosos padrões de segurança alimentar.' />
          <CardServices icon={<Truck />} title='Siderurgica' content='Soluções robustas para o transporte de produtos siderúrgicos, com foco em eficiência e segurança.' />
        </motion.div>
      </section>
      <section className='bg-zinc-50 py-16'>
        <div className='container flex mx-auto px-0 md:px-10 lg:px-5 xl:px-10'>
          <div className='flex flex-col items-center gap-10'>
            <h1 className='font-black text-3xl sm:text-4xl uppercase text-zinc-700'>COBERTURA GEOGRÁFICA</h1>
            <div className='flex flex-col-reverse gap-20 sm:gap-10 md:flex-row justify-between items-center'>
              <motion.div
                initial={{ opacity: 0, x: -50, scale: 0.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5 }}

                className='w-full sm:w-1/2 px-3 sm:px-0 item-start justify-center'>
                <Image width={9000} height={9000} src={mapaCobertura} alt="Mapa de cobertura geográfica volpress" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: +50, scale: 0.7 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center gap-10 '>
                <h1 className='font-black text-3xl sm:text-4xl uppercase text-zinc-700'>Brasil</h1>
                <ul className='flex flex-col gap-3 text-2xl sm:text-3xl text-zinc-900 text-center sm:text-start'>
                  <li className='flex sm:text-2xl'><DotFilledIcon className='size-6 h-full' /> Paraná</li>
                  <li className='flex sm:text-2xl'><DotFilledIcon className='size-6 h-full' />São Paulo</li>
                  <li className='flex sm:text-2xl'><DotFilledIcon className='size-6 h-full' />Santa Catarina</li>
                  <li className='flex sm:text-2xl'><DotFilledIcon className='size-6 h-full' />Rio de Janeiro</li>
                  <li className='flex sm:text-2xl'><DotFilledIcon className='size-6 h-full' />Espirito Santo</li>
                </ul>
                <h1 className='font-normal sm:text-base text-zinc-700 text-center sm:text-justify px-3 sm:px-0'>
                  <span className='font-bold'>A 28 Anos no mercado</span>, a Volpress está buscando se especializar ainda mais a cada dia para atender às
                  necessidades dos nossos clientes de forma excepcional.
                  Com um compromisso contínuo com a excelência, inovação e a agilidade em nossos transportes.
                </h1>
              </motion.div>
            </div>
          </div>
        </div>
      </section >

      <section className='w-full py-24 bg-zinc-50'>
        <div className='container mx-auto flex items-center gap-20 flex-col px-4 sm:px-0'>
          <div className='flex flex-col container mx-auto justify-center items-center z-40 relative gap-5'>
            <h1 className='font-black text-3xl sm:text-4xl uppercase text-zinc-700'>Nossa Frota</h1>
            <p className='max-w-[700px] text-center text-zinc-900 px-3'>
              Nossa frota é moderna e padronizada para atender às exigências dos clientes.
              Utilizamos carretas LS e Vanderleia, com no mínimo 14 metros de comprimento e equipadas com bobineiras para maior flexibilidade no transporte.
              Isso nos permite oferecer maior capacidade de carga, resultando em melhor custo-benefício para os clientes
            </p>
          </div>
          <CardFrota />
        </div>
      </section>

      <SobreNos />
      <section className='bg-zinc-200 py-16'>
        <div className='flex flex-col container mx-auto justify-center items-center z-40 relative gap-9'>
          <h1 className='font-black text-3xl sm:text-4xl uppercase text-zinc-700'>NOSSOS CLIENTES</h1>
          <p className='max-w-[650px] text-center text-zinc-600 px-3'>Nossos clientes são de extrema importância para nós, e valorizamos cada um deles de forma igualitária. Aqui estão alguns exemplos destacados</p>
        </div>
        <ClientsCarrousel />
      </section>
      <section className='pt-16 bg-zinc-50' id="location">
        <div className='flex flex-col container mx-auto justify-center items-center z-40 relative gap-9'>
          <h1 className='font-black text-3xl sm:text-4xl uppercase text-zinc-700'>ONDE ESTAMOS</h1>
          <p className='max-w-[650px] text-center text-zinc-600 px-3'>
            Nossa matriz está localizada na Rodovia BR-116, Km 110, nº 22.730, Sala 2, Tatuquara, CEP 81690-500, Curitiba, PR.
            Esse ponto estratégico nos permite atender com maior agilidade os estados de Minas Gerais, Espírito Santo, Rio de Janeiro,
            São Paulo, Paraná, Santa Catarina e Rio Grande do Sul, entre outros.
          </p>
        </div>
        <iframe
          className='w-full h-[300px] mt-10 border-0'
          src="https://www.google.com/maps/embed/v1/place?q=Volpress%20caminhões&key=AIzaSyDkV5hxnlGzSZOlzAMMU5gvH0c5GhkMMko"
        />
        <ButtonWhatsAppFixed />
      </section>
      <Footer />
    </div >
  )
}





