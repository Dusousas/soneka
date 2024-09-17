/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const router = useRouter();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

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

    const handleNavigation = (sectionId: string) => {
        if (router.pathname === '/') {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else {
            router.push(`/#${sectionId}`);
        }
        closeMenu();
    };

    return (
        <>
            <header className="py-3 fixed w-full z-20 ">
                <div className="flex justify-between items-center maxWidth">
                    <div>
                        <a className='text-black uppercase font-black text-2xl font-Oswald ' href="#"><img className='w-[140px]' src="Logo.png" alt="" /></a>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            <svg className="w-8 h-8 hover:text-OrangeP" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <nav className={`lg:flex text-white font-semibold ${isOpen ? 'block' : 'hidden'} custom-height text-center bg-OrangeP flex flex-col gap-10 items-center justify-center absolute left-0 z-10 top-[60px] uppercase w-full lg:flex lg:h-[39px] lg:flex-row lg:static lg:w-auto lg:bg-transparent`}>
                        <span onClick={() => handleNavigation('main')} className={`block py-2 cursor-pointer ${activeSection === 'main' ? 'border-b-[2px] lg:border-OrangeP' : ''}`}>Início</span>
                        <span onClick={() => handleNavigation('services')} className={`block py-2 cursor-pointer ${activeSection === 'services' ? 'border-b-[2px] lg:border-OrangeP' : ''}`}>Serviços</span>
                        <span onClick={() => handleNavigation('about')} className={`block py-2 cursor-pointer ${activeSection === 'about' ? 'border-b-[2px] lg:border-OrangeP' : ''}`}>Sobre</span>
                        <span onClick={() => handleNavigation('projects')} className={`block py-2 cursor-pointer ${activeSection === 'projects' ? 'border-b-[2px] lg:border-OrangeP' : ''}`}>Projetos</span>
                        <span onClick={() => handleNavigation('contact')} className={`block py-2 cursor-pointer ${activeSection === 'contact' ? 'border-b-[2px] lg:border-OrangeP' : ''}`}>Contato</span>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavBar;
