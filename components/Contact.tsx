import { faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Form from "@/components/Form";


export default function Contact() {
    return (
        <>
            <section id="contact" className='ContactBG pt-20'>
                <div className='maxWidth'>
                    <p className="font-Bebas text-2xl text-white text-center">Quer saber mais?</p>
                    <h1 className="uppercase font-Bebas text-white text-center text-6xl "><span className="text-RedP">Entre</span> em contato</h1>
                    <h1 className="uppercase font-Bebas text-white text-center text-6xl mt-16 ">Nossas unidades</h1>

                    <article className="flex flex-wrap flex-col gap-6 mt-6 items-center justify-center lg:flex-row">
                        <div className="border border-RedP rounded-xl w-[400px] p-6">
                            <article className="border-b border-white">
                                <h1 className="font-Bebas text-xl text-white">Unidade Interlagos</h1>
                                <p className="mb-4 text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </article>
                            <div className="mt-4">
                                <img src="imgAbout.jpg" alt="" />
                            </div>
                            <div className="flex gap-4 items-center justify-center mt-4">
                                <a href="#"><FontAwesomeIcon className="text-RedP text-3xl mb-2" icon={faSquareInstagram} /></a>
                                <a href="#"><FontAwesomeIcon className="text-RedP text-3xl mb-2" icon={faSquareWhatsapp} /></a>
                            </div>
                        </div>

                        <div className="border border-RedP rounded-xl w-[400px] p-6">
                            <article className="border-b border-white">
                                <h1 className="font-Bebas text-xl text-white">Unidade São Bernardo</h1>
                                <p className="mb-4 text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                            </article>
                            <div className="mt-4">
                                <img src="imgSBC.jpg" alt="" />
                            </div>

                            <div className="flex gap-4 items-center justify-center mt-4">
                                <a href="#"><FontAwesomeIcon className="text-RedP text-3xl mb-2" icon={faSquareInstagram} /></a>
                                <a href="#"><FontAwesomeIcon className="text-RedP text-3xl mb-2" icon={faSquareWhatsapp} /></a>
                            </div>
                        </div>
                    </article>
                    <div className="border-b mt-20 border-RedP w-[70%] mx-auto" />
                    <Form />
                </div>
            </section>
        </>
    );
}