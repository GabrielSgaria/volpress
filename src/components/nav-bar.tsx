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
            <div className="shadow-md bg-neutral-50">
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
                                className={`flex min-w-0 flex-row items-center justify-center gap-2 text-base ${isMenuOpen ? "flex-col" : "flex-row"
                                    }`}
                            >
                                <Link
                                    onClick={closeMenu}
                                    href="/"
                                    className="cursor-pointer px-3 uppercase font-semibold hover:text-lime-300 transition-all duration-300 w-36 text-center bg-transparent saira text-xl text-zinc-950 hover:underline"
                                >
                                    Inicio
                                </Link>
                                <button
                                    onClick={() => scrollToSection("services")}
                                    className="cursor-pointer px-3 uppercase font-semibold hover:text-lime-300 transition-all duration-300 w-36 text-center bg-transparent saira text-xl text-zinc-950 hover:underline"
                                >
                                    serviços
                                </button>
                                <button
                                    onClick={() => scrollToSection("results")}
                                    className="cursor-pointer px-3 uppercase font-semibold hover:text-lime-300 transition-all duration-300 w-48 text-center bg-transparent saira text-xl text-zinc-950 hover:underline"
                                >
                                    onde estamos
                                </button>
                                <button
                                    onClick={() => scrollToSection("team")}
                                    className="cursor-pointer px-3 uppercase font-semibold hover:text-lime-300 transition-all duration-300 w-48 text-center bg-transparent saira text-xl text-zinc-950 hover:underline"
                                >
                                    quem somos
                                </button>

                            </div>
                        </nav>
                    </div>

                    <button
                        onClick={() => scrollToSection("contacts")}
                        className="cursor-pointer px-3 bg-neutral-50 saira text-2xl text-neutral-950 hover:underline hover:text-lime-300"
                    >
                        <PersonIcon className="size-7 w-8 transition-all duration-300 hover:size-8" />
                    </button>
                </div>
            </div>
        </div>
    );
}
