import React from 'react';
import { motion } from 'framer-motion';
import { faSquareFacebook, faSquareInstagram, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Main() {

  const iconVariant = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1.5 } }
  };

  return (
    <div>
      <section id='main' className='mainBG'>
        <div className='maxWidth customH flex flex-col gap-4 items-center justify-center'>

          <h1 className='font-Bebas text-center text-5xl text-white lg:text-7xl'>Customize seu veículo na <span className='text-RedP'>Soneka</span></h1>
          <p className='text-center text-lg lg:text-xl text-white'>Transforme seu carro com rodas exclusivas e pintura personalizada.</p>

          <div>
            <button className='bg-RedP py-3 px-6 mt-4 uppercase text-white'>Fale Conosco</button>
          </div>


        </div>
        <motion.div
          className="text-white flex px-[2%] flex-col absolute bottom-6 right-0"
          variants={iconVariant}
          initial="hidden"
          animate="visible">
          <a href="#"><FontAwesomeIcon className="text-RedP text-3xl mb-2" icon={faSquareInstagram} /></a>
          <a href="#"><FontAwesomeIcon className="text-RedP text-3xl mb-2" icon={faSquareWhatsapp} /></a>
          <a href="#"><FontAwesomeIcon className="text-RedP text-3xl mb-2" icon={faSquareFacebook} /></a>
        </motion.div>
      </section>
    </div>
  );
}