import GoogleMaps from "./google-maps"

export function Location() {
    return (
        <section className='w-full pt-16 bg-zinc-50' id="location">
            <div className='flex flex-col container mx-auto justify-center items-center z-40 relative gap-9'>
                <h1 className='font-black text-3xl sm:text-4xl uppercase text-zinc-700'>ONDE ESTAMOS LOCALIZADOS</h1>
                <p className='max-w-[650px] text-center text-zinc-600 px-3'>
                    Nossa matriz esta localizada na Rod BR 116, Km 110, n. 22.730 Sala 2 - Tatuquara - 81690-500 -
                    Curitiba PR. Esse ponto estratégico nos permite atender com maior agilidade os estados de Minas Gerais,
                    Espírito Santo, Rio de Janeiro, São Paulo, Paraná, Santa Catarina e Rio Grande do Sul, entre outros.
                </p>
            </div>

            <GoogleMaps />

        </section>
    )
}
