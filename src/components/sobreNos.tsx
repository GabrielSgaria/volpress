import Image from "next/image";
import frota1 from '../../public/image//frota/frente-volpress.jpg'
import { motion } from "framer-motion";

export function SobreNos() {
    return (
        <section className="bg-zinc-50 py-10" id="about">
            <div className="mx-auto container flex px-4 sm:px-0 h-full sm:h-[600px] lg:px-10">
                <div className="w-full flex flex-col-reverse items-center sm:flex-row sm:justify-around gap-10">
                    <motion.div
                        initial={{ opacity: 0, x: -50, scale: 0.7 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-10 justify-center items-center text-center sm:text-start sm:items-start">
                        <h1 className="font-black text-3xl sm:text-5xl uppercase text-zinc-700">Quem somos</h1>
                        <p className="text-base xl:text-lg max-w-[500px] text-zinc-900">
                            A Volpress Transportes é referência no segmento de transportes rodoviários de cargas,
                            reconhecida pela qualidade, confiança e inovação na prestação de seus serviços, atuando desde 1996.
                        </p>
                        <p className="text-base xl:text-lg max-w-[500px] text-zinc-900">
                            A Volpress Transportes foi criada para atender às demandas de um mercado altamente exigente,
                            focando nas necessidades de cada cliente.
                        </p>
                        <span className="text-base xl:text-lg font-medium sm:text-start text-center max-w-[500px] sm:text-base italic text-zinc-800 text-shadow-sm shadow-slate-900/60">
                            "Nosso foco total é no cliente e em suas necessidades, procuramos sempre entender para atender."
                        </span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: +50, scale: 0.7 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-10 sm:mb-0 max-w-[70%] xl:w-1/2 h-full sm:h-full rounded-2xl overflow-hidden">
                        <Image
                            width={600}
                            height={800}
                            src={frota1}
                            alt="Frota Volpress"
                            className="object-fill"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}