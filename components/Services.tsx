import { motion } from "framer-motion";

export default function Services() {
    return (
        <>
            <section id="services" className='bg-black py-20 aboutBg'>
                <div className='maxWidth'>
                    <div className="flex items-center gap-2 justify-center">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}>
                            <img src="roda.png" alt="Roda girando" />
                        </motion.div>
                        <p className="font-Bebas text-2xl text-white"><span className="text-RedP">Soneka</span> rodas e pneus</p>
                    </div>
                    <h1 className="uppercase font-Bebas text-center lg:text-6xl mt-6 text-white">Tudo o Que Você Precisa em Um Só Lugar!</h1>
                    <p className="text-center text-lg lg:text-xl mt-6 text-white">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.</p>

                    <article className="flex flex-wrap flex-col gap-6 mt-16  items-center justify-center lg:flex-row">
                        <div className="border border-RedP rounded-xl w-[400px] p-6">
                            <article className="border-b border-white">
                                <h1 className="font-Bebas text-xl text-white">Rodas Exclusivas</h1>
                                <p className="mb-4 text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </article>
                            <div className="mt-4">
                                <img src="Card1.jpg" alt="" />
                            </div>
                        </div>

                        <div className="border border-RedP rounded-xl w-[400px] p-6">
                            <article className="border-b border-white">
                                <h1 className="font-Bebas text-xl text-white">Pneus novos e Semi-novos</h1>
                                <p className="mb-4 text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </article>
                            <div className="mt-4">
                                <img src="Card4.jpg" alt="" />
                            </div>
                        </div>

                        <div className="border border-RedP rounded-xl w-[400px] p-6">
                            <article className="border-b border-white">
                                <h1 className="font-Bebas text-xl text-white">Customização</h1>
                                <p className="mb-4 text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </article>
                            <div className="mt-4">
                                <img src="Card2.jpg" alt="" />
                            </div>
                        </div>
                    </article>

                </div>
            </section>
        </>
    );
}