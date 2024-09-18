export default function About() {
    return (
        <>
            <section id="about" className='bg-white py-20'>
                <div className='maxWidth'>
                    <p className="font-Bebas text-2xl text-black text-center">Um pouco mais sobre</p>
                    <h1 className="uppercase font-Bebas text-black text-center text-6xl "><span className="text-RedP">Soneka</span> Rodas e Pneus</h1>


                    <article className="mt-20 flex flex-col gap-12 items-center justify-center lg:flex-row lg:items-start">
                        <div className="max-w-[620px] rounded ">
                            <img className="rounded-xl" src="imgAbout.jpg" alt="" />
                        </div>

                        <div className="max-w-[620px] rounded border-r pr-4 border-RedP ">
                            <p className="font-Bebas text-black text-2xl"><span className="text-RedP">Sobre a </span>Soneka rodas e pneus</p>
                            <p className="text-black font-medium">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi rem debitis officia quasi harum voluptas eum magnam cupiditate reprehenderit dolor.</p>
                            <p className="text-black mt-6">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium ipsum cum neque veniam iure natus magni, quia officia hic, eaque qui quasi voluptatum quaerat nisi rerum? Voluptatum, fuga repellendus dolores minima dolor labore quos placeat ex! Reiciendis ipsa necessitatibus esse provident fugit beatae rerum. Magnam exercitationem sit dolor commodi ducimus!</p>

                            <div className="border flex flex-col items-center rounded-xl py-6 border-RedP mt-8 lg:flex-row justify-center">
                                <div className="lg:pr-4">
                                    <h1 className="text-black font-Bebas text-2xl">Projetos Realizados</h1>
                                    <h1 className="text-RedP font-Bebas text-4xl">400+</h1>
                                </div>

                                <div className="lg:border-r lg:border-l lg:border-black lg:px-4">
                                    <h1 className="text-black font-Bebas text-2xl">Anos de experiência</h1>
                                    <h1 className="text-RedP  font-Bebas text-4xl">10</h1>
                                </div>

                                <div className="lg:pl-4">
                                    <h1 className="text-black font-Bebas text-2xl">Clientes Satisfeitos</h1>
                                    <h1 className="text-RedP font-Bebas text-4xl">500+</h1>
                                </div>
                            </div>

                            <button className='bg-RedP py-3 px-6 mt-6 uppercase text-white'>Saiba mais</button>

                        </div>



                    </article>
                </div>
            </section>
        </>
    );
}