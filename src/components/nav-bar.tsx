"use client";
import Link from "next/link";
import { DotsHorizontalIcon, PersonIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Image from "next/image";

export function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            closeMenu();
        }
    };
    return (
        <div className="z-50 relative">
            <div className=" bg-transparent">
                <div
                    className={`container mx-auto flex flex-row items-center justify-between gap-8 py-6 text-lg px-8  ${isMenuOpen ? "flex-col" : "flex-row"
                        }`}
                >
                    <div className="flex h-9 w-9 items-center justify-center lg:hidden">
                        <DotsHorizontalIcon
                            onClick={handleMenuToggle}
                            className="size-8 text-zinc-950 hover:size-9 focus:outline-none lg:hidden"
                        />
                    </div>
                    <div className="w-36">
                        <Link href="/" onClick={closeMenu}>
                            <Image
                                width={400}
                                height={400}
                                src="/image/logo_site1.png"
                                alt="Logo Principal"
                            />
                        </Link>
                    </div>

                    <div
                        className={`lg:flex lg:items-center lg:gap-8 ${isMenuOpen ? "flex" : "hidden"
                            }`}
                    >
                        <nav className="md:flex grow justify-center ">
                            <div
                                className={`flex min-w-0 flex-row items-center justify-center text-base ${isMenuOpen ? "flex-col gap-16 " : "flex-row gap-1"
                                    }`}
                            >
                                <Link
                                    onClick={closeMenu}
                                    href="/"
                                    className="cursor-pointer px-3 font-bold w-36 text-center bg-transparent text-lg text-zinc-950 hover:underline"
                                >
                                    Inicio
                                </Link>
                                <button
                                    onClick={() => scrollToSection("services")}
                                    className="cursor-pointer px-3 font-bold w-36 text-center bg-transparent text-lg text-zinc-950 hover:underline"
                                >
                                    Serviços
                                </button>
                                <button
                                    onClick={() => scrollToSection("lucation")}
                                    className="cursor-pointer px-3 font-bold w-48 text-center bg-transparent text-lg text-zinc-950 hover:underline"
                                >
                                    Onde Estamos
                                </button>
                                <button
                                    onClick={() => scrollToSection("about")}
                                    className="cursor-pointer px-3 font-bold w-48 text-center bg-transparent text-lg text-zinc-950 hover:underline"
                                >
                                    Quem Somos
                                </button>
                                <button
                                    onClick={() => scrollToSection("about")}
                                    className="cursor-pointer px-3 font-bold transition-all duration-300 w-44 text-center shadow-md bg-lime-400 py-3 rounded-2xl text-lg text-zinc-950 hover:bg-lime-500"
                                >
                                    Fale conosco
                                </button>

                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    );
}
