import Image from "next/image";
import frota1 from '../../public/image/frota-volpress.png'

export function SobreNos() {
    return (
        <section className="bg-zinc-200 py-24">
            <div className="mx-auto container flex">
                <div className="flex flex-row">
                    <div className="w-1/2 flex flex-col gap-8 justify-center">
                        <h1 className="font-black text-4xl uppercase text-zinc-700">Sobre a Volpress</h1>
                        <p className="text-base max-w-[580px] text-zinc-900">
                            A Volpress Transportes é referência no segmento de transportes rodoviários de cargas,
                            reconhecida pela qualidade, confiança e inovação na prestação de seus serviços, atuando desde 1996.
                        </p>
                        <p className="text-base max-w-[580px] text-zinc-900">
                            A Volpress Transportes foi criada para atender às demandas de um mercado altamente exigente,
                            focando nas necessidades de cada cliente.
                        </p>
                        <span className="text-base font-medium text-start sm:max-w-[580px] sm:text-base italic text-zinc-800 text-shadow-sm shadow-slate-900/60">
                            "Nosso foco total é no cliente e em suas necessidades, procuramos sempre entender para atender."
                        </span>
                    </div>
                    <div className="w-1/2 rounded-2xl overflow-hidden ">
                        <Image
                            width={9000}
                            height={9000}
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