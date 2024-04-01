import { NavBar } from "@/components/nav-bar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[1000px]">
      <NavBar />
      <section className="w-full h-[650px] flex flex-row bg-zinc-100 justify-center items-center text-zinc-950 ">
        <div className="container mx-auto px-4 w-full flex flex-col gap-20">
          <h1 className="font-black text-8xl max-w-[750px]">VOLPRESS</h1>
          <p className="font-medium text-2xl max-w-[650px] leading-9">A Volpress Transportes é referência no segmento de transportes rodoviários de cargas, reconhecida pela qualidade, confiança e inovação na prestação de seus serviços, atuando desde 1996.</p>
          <button className=" bg-gradient-to-b to-lime-400 from-lime-500 rounded-3xl w-52 h-16 font-bold text-xl shadow-xl hover:to-lime-500">FALE CONOSCO</button>
        </div>
        <div className="w-[500px] z-50 absolute right-0 drop-shadow-2xl ">
          <Image className="" width={900} height={900} src="/image/truck.png" alt="" />
        </div>
      </section>
    </div>
  );
}
