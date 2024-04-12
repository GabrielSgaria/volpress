import Image from "next/image";
import frota1 from '../../public/image//frota/frente-volpress.jpg'

export function SobreNos() {
    return (
        <section className="bg-zinc-200 py-10">
            <div className="mx-auto container flex px-4 sm:px-0 h-full sm:h-[600px]">
                <div className="w-full flex flex-col-reverse items-center sm:flex-row sm:justify-around ">
                    <div className="flex flex-col gap-10 justify-center items-center text-center sm:text-start sm:items-start">
                        <h1 className="font-black text-4xl sm:text-5xl uppercase text-zinc-700">Sobre a Volpress</h1>
                        <p className="text-base sm:text-lg max-w-[580px] text-zinc-900">
                            A Volpress Transportes é referência no segmento de transportes rodoviários de cargas,
                            reconhecida pela qualidade, confiança e inovação na prestação de seus serviços, atuando desde 1996.
                        </p>
                        <p className="text-base sm:text-lg max-w-[580px] text-zinc-900">
                            A Volpress Transportes foi criada para atender às demandas de um mercado altamente exigente,
                            focando nas necessidades de cada cliente.
                        </p>
                        <span className="font-medium sm:text-start text-center sm:max-w-[580px] sm:text-base italic text-zinc-800 text-shadow-sm shadow-slate-900/60">
                            "Nosso foco total é no cliente e em suas necessidades, procuramos sempre entender para atender."
                        </span>
                    </div>
                    <div className="mb-10 sm:mb-0 h-full sm:h-full rounded-2xl overflow-hidden">
                        <Image
                            width={600}
                            height={800}
                            src={frota1}
                            alt="Frota Volpress"
                            className="object-fill"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}