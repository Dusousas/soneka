import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

export default function Projects() {
    // Adiciona o tipo correto para o sliderRef
    const sliderRef = useRef<Slider | null>(null);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };

    return (
        <>
            <section id="projects" className="aboutBg  py-20 autoH">
                <div className="maxWidth">
                    <article className="flex flex-col justify-center items-center lg:flex-row lg:justify-between lg:items-end ">
                        <article className="flex flex-col justify-center gap-4 lg:justify-start">
                            <div className="flex justify-center gap-4 lg:justify-start">
                                <div className="border-r-4 border-RedP" />
                                <h1 className="font-Bebas text-GrayP font-bold text-white uppercase text-5xl lg:text-left">Projetos Realizados</h1>
                            </div>
                            <div>
                                <p className="mt-4 text-center text-white lg:text-left text-GrayPP">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quia nemo delectus deleniti illum laborum corporis, minima corrupti accusamus aspernatur.</p>
                            </div>
                        </article>

                        {/* SETAS */}
                        <article className="flex gap-4 mt-8 items-center">
                            <img
                                className="cursor-pointer w-[42px] h-[42px]"
                                src="/setaL.png"
                                alt="Seta Esquerda"
                                onClick={() => sliderRef.current?.slickPrev()} // Verifica se sliderRef.current existe
                            />
                            <img
                                className="cursor-pointer w-[42px] h-[42px]"
                                src="/setaR.png"
                                alt="Seta Direita"
                                onClick={() => sliderRef.current?.slickNext()} // Verifica se sliderRef.current existe
                            />
                        </article>
                    </article>

                    {/* CAROUSEL */}
                    <article className="mt-12 mx-auto">
                        <Slider ref={sliderRef} {...settings}>
                            <div className="px-2">
                                <img src="/Card4.jpg" alt="Projeto 1" className="" />
                            </div>

                            <div className="px-2">
                                <img src="/Card2.jpg" alt="Projeto 1" className="" />
                            </div>

                            <div className="px-2">
                                <img src="Card1.jpg" alt="Projeto 1" className="" />
                            </div>
                        </Slider>
                    </article>

                    <div className="flex justify-center">
                        <button className="bg-RedP uppercase rounded text-white py-4 px-4 mt-8 font-medium">Faça um orçamento</button>
                    </div>

                </div>
            </section>
        </>
    );
}
