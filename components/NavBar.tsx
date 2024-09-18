import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import React from 'react';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);

    return (
        <>
            <header className={`py-3 w-full fixed z-10 transition-all  ${isScrolled ? 'bg-black shadow-lg' : 'bg-transparent'}`}>
                <div className="flex justify-between items-center maxWidth">
                    <div className='flex flex-col items-center'>
                        <img className='w-[100px]' src="Logo.png" alt="" />
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className={isScrolled ? 'text-white focus:outline-none' : 'text-white focus:outline-none'}>
                            <svg className="w-8 h-8 hover:text-RedP" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <nav className={`lg:flex ${isOpen ? 'block' : 'hidden'} text-center ${isScrolled ? 'bg-black' : 'bg-transparent'} flex flex-col items-center justify-center nav gap-8 absolute left-0 z-10 top-[85px] uppercase w-full lg:flex lg:h-[39px] lg:flex-row lg:static lg:w-auto lg:bg-transparent`}>
                        <ScrollLink duration={500} offset={0} to='main' smooth={true} onClick={closeMenu}>
                            <span className={`block py-2 cursor-pointer ${isScrolled ? 'text-white' : 'text-white'} ${activeSection === 'main' ? 'border-b-[2px] lg:border-[#D6181A]' : ''}`}>Início</span>
                        </ScrollLink>

                        <ScrollLink duration={500} offset={-80} to='services' smooth={true} onClick={closeMenu}>
                            <span className={`block py-2 cursor-pointer ${isScrolled ? 'text-white' : 'text-white'} ${activeSection === 'services' ? 'border-b-[2px] lg:border-[#D6181A]' : ''}`}>Serviços</span>
                        </ScrollLink>

                        <ScrollLink duration={500} offset={-80} to='about' smooth={true} onClick={closeMenu}>
                            <span className={`block py-2 cursor-pointer ${isScrolled ? 'text-white' : 'text-white'} ${activeSection === 'about' ? 'border-b-[2px] lg:border-[#D6181A]' : ''}`}>Sobre nós</span>
                        </ScrollLink>

                        
                        <ScrollLink duration={500} offset={-80} to='projects' smooth={true} onClick={closeMenu}>
                            <span className={`block py-2 cursor-pointer ${isScrolled ? 'text-white' : 'text-white'} ${activeSection === 'projects' ? 'border-b-[2px] lg:border-[#D6181A]' : ''}`}>Projetos</span>
                        </ScrollLink>

                        <ScrollLink duration={500} offset={-80} to='contact' smooth={true} onClick={closeMenu}>
                            <span className={`block py-2 cursor-pointer ${isScrolled ? 'text-white' : 'text-white'} ${activeSection === 'contact' ? 'border-b-[2px] lg:border-[#D6181A]' : ''}`}>Contato</span>
                        </ScrollLink>

                        <ScrollLink to='contact' onClick={closeMenu}>
                            <span className={`block px-4 py-2 cursor-pointer ${isScrolled ? 'text-white  bg-[#D6181A]' : 'text-white bg-RedP'}`}>Fazer orçamento</span>
                        </ScrollLink>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavBar;
