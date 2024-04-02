import Image from "next/image";

export function CardService() {
    return (
        <div className="bg-zinc-100 w-5/6 h-[400px] flex flex-row rounded-2xl items-center justify-around shadow-xl">
            <div className="flex flex-col items-end w-1/2 gap-8">
                <h1 className="text-3xl text-zinc-800 font-black">Nossa Especialidade</h1>
                <span className="text-xl text-end">A Volpress é referência no transporte de cargas gerais com carroceria aberta.
                    Acompanhando a evolução do mercado dos últimos anos, nos especializamos para atender a sua necessidade no segmento de transporte.
                </span>
            </div>

            <div className="bg-zinc-950 w-[500px] h-[250px] rounded-3xl overflow-hidden">
                <Image
                    width={9000}
                    height={9000}
                    src="/image/frota-volpress.png"
                    alt="Frota Volpress"
                    className="object-fill w-full h-full" />
            </div>

        </div>
    )
}