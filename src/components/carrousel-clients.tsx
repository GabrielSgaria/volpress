'use client'
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import Image from "next/image";

export function ClientsCarrousel() {
    return (
        <div className="flex overflow-hidden text-center justify-center text-4xl font-semibold bebasNeue text-neutral-100">
            <div>
                <Splide
                    options={{
                        type: "loop",
                        focus: "center",
                        autoPlay: "play",
                        arrows: false,
                        pagination: false,
                        drag: "free",
                        gap: 80,
                        padding: 180,
                        autoWidth: true,

                        perPage: 1,
                        autoScroll: {
                            speed: 1,
                            autoStart: true,
                        },
                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide classname="flex items-center justify-center">
                        <Image
                            width={100000}
                            height={100000}
                            alt=""
                            src="/image/clients/acelormittal.png"
                            className=" object-contain h-[100px] w-[100px]"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image
                            width={100000}
                            height={100000}
                            alt=""
                            src="/image/clients/arauco.png"
                            className=" object-contain h-[100px] w-[100px]"

                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image
                            width={100000}
                            height={100000}
                            alt=""
                            src="/image/clients/berneck.png"
                            className=" object-contain h-[100px] w-[100px]"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image
                            width={100000}
                            height={100000}
                            alt=""
                            src="/image/clients/csn.png"
                            className=" object-contain h-[100px] w-[100px]"
                        />
                    </SplideSlide>
                    <SplideSlide>
                        <Image
                            width={100000}
                            height={100000}
                            alt=""
                            src="/image/clients/logo_romagnole.jpg"
                            className=" object-contain h-[100px] w-[100px]"
                        />
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    )
}