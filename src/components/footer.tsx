"use client";
import {
  DesktopIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export function Footer() {
  function sendMensage(numeroTelefone: number, mensagemPadrao: string) {
    var linkWhatsApp =
      "https://wa.me/" +
      numeroTelefone +
      "?text=" +
      encodeURIComponent(mensagemPadrao);

    window.open(linkWhatsApp, "_blank");
  }

  return (
    <footer id="contacts" className="pb-8">
      <div className="container mx-auto mt-16 flex flex-col gap-16 sm:flex-row sm:justify-around sm:gap-0">
        <div className="flex flex-col items-center sm:items-start ">
          <h1 className="text-2xl font-semibold bebasNeue text-zinc-800">
            Informações <br />
            para contato
          </h1>
          <p className="mt-8 max-w-[300px] text-center sm:text-start text-xl sm:text-base text-zinc-600">
            Sinta-se à vontade para entrar em contato conosco a qualquer
            momento.
          </p>
          <div className="mt-8 flex flex-col gap-4 text-center sm:items-start sm:justify-start">
            <a
              onClick={() =>
                sendMensage(
                  5541997169203,
                  "Olá! Vim através do site da M2 Agência de Marketing."
                )
              }
              className="flex cursor-pointer items-center justify-center gap-4 text-zinc-800"
            >
              <FaWhatsapp className="size-6" />
              <p className="h-6 text-base items-center justify-center font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                (41) 99716-9203
              </p>
            </a>
            <Link
              target="blank"
              href="mailto:m2agdigital@gmail.com"
              className="flex cursor-pointer items-center gap-4 text-zinc-800"
            >
              <EnvelopeClosedIcon className="size-6" />
              <p className="h-6 font-semibold text-base transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                m2agdigital@gmail.com
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-center text-2xl font-semibold text-zinc-800 sm:text-start ">
            Atual <br /> disponibilidade
          </h1>
          <p className="mt-8 max-w-[300px] text-center sm:text-start text-base text-zinc-600">
            Estamos sempre abertos a novos projetos e colaborações, prontos para
            explorar oportunidades imediatamente!
          </p>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-center text-2xl font-semibold text-zinc-800 sm:text-start ">
            Nos encontre nas <br />
            redes sociais
          </h1>
          <div className="mt-8 flex flex-col items-center gap-4 sm:items-start">
            <Link
              target="blank"
              href="https://www.facebook.com/profile.php?id=100093656801783"
              className="flex cursor-pointer flex-row items-center gap-4 text-zinc-800"
            >
              <FaFacebook className="size-6" />
              <p className="h-6 text-base font-semibold transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                M2 Agência de Marketing
              </p>
            </Link>
            <Link
              target="blank"
              href="https://www.instagram.com/m2agenciamkt/"
              className="flex cursor-pointer flex-row items-center gap-4 text-zinc-800"
            >
              <FaInstagram className="size-6" />
              <p className="h-6 font-semibold text-base transition-all duration-500 hover:border-b-[1px] hover:border-zinc-800">
                @m2agenciamkt
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16 flex h-8 cursor-pointer items-center justify-center space-x-2 text-zinc-500 transition-all  hover:font-semibold hover:text-zinc-950">
        <h1 className="max-w-[300px] text-sm sm:text-start ">
          <Link target="blank" href="https://portfolio-sgaria.vercel.app">
            Desenvolvido por Gabriel Sgaria
          </Link>
        </h1>
        <div>
          <DesktopIcon className="size-4 items-center " />
        </div>
      </div>
    </footer>
  );
}
