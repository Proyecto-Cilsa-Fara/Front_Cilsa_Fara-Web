import { useState } from "react"
import { Link, useLocation } from "react-router"
import { X, MenuIcon } from "../assets/icons"
import faraLogoImage from "../assets/LOGO-FARA.webp"
import faraLogoImageRetina from "../assets/LOGO-FARA-retina.webp"
import faraLogoImage4k from "../assets/LOGO-FARA-4k.webp"

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    return (
        <nav className="bg-white p-4 text-black">
            <div className="flex w-full items-center justify-between">
                {/* Logo */}
                <Link
                    to="/"
                    aria-current={location.pathname === "/" ? "page" : undefined}
                    className="focus-visible:ring-fara-blue grid min-h-12 min-w-12 place-items-center border-4 border-white p-2 transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-black focus:border-black focus-visible:ring-2 focus-visible:outline-0 active:border-black active:outline-0"
                >
                    <img
                        alt="Logo de FARA que actúa como link a la página de inicio."
                        src={faraLogoImage}
                        srcSet={`${faraLogoImageRetina} 2x, ${faraLogoImage4k} 3x`}
                        className="h-12 w-auto"
                        width="152px"
                        height="48px"
                    />
                </Link>

                {/* Links Centrados */}
                <ul className="hidden items-center gap-2 font-bold uppercase lg:flex">
                    <li className="group relative text-left">
                        <button
                            type="button"
                            className="group-focus-within:ring-fara-blue inline-flex w-full cursor-pointer justify-center border-b-4 border-b-white px-2 py-4 font-bold uppercase group-focus-within:ring-2 group-focus-within:ring-offset-2 hover:border-b-black focus:outline-none"
                        >
                            Institución
                            <svg className="-mr-1 ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        <div className="ring-opacity-5 absolute right-0 mt-2 hidden w-56 origin-top-right bg-white shadow-lg ring-1 ring-black group-focus-within:block focus:outline-none">
                            <div className="py-1">
                                <Link
                                    to="/institucional"
                                    role="menuitem"
                                    aria-current={location.pathname === "/institucional" ? "page" : undefined}
                                    className="hover:bg-fara-gray focus-visible:ring-fara-blue block px-4 py-2 text-sm font-bold uppercase hover:text-white focus-visible:ring-2 focus-visible:outline-0 focus-visible:ring-inset"
                                >
                                    Sobre Institución
                                </Link>
                                <Link
                                    to="/bibliotecafara"
                                    role="menuitem"
                                    aria-current={location.pathname === "/bibliotecafara" ? "page" : undefined}
                                    className="hover:bg-fara-gray focus-visible:ring-fara-blue block px-4 py-2 text-sm font-bold uppercase hover:text-white focus-visible:ring-2 focus-visible:outline-0 focus-visible:ring-inset"
                                >
                                    Biblioteca FARA
                                </Link>
                                <Link
                                    to="/agendafara"
                                    role="menuitem"
                                    aria-current={location.pathname === "/agendafara" ? "page" : undefined}
                                    className="hover:bg-fara-gray focus-visible:ring-fara-blue block px-4 py-2 text-sm font-bold uppercase hover:text-white focus-visible:ring-2 focus-visible:outline-0 focus-visible:ring-inset"
                                >
                                    Agenda FARA
                                </Link>
                                <Link
                                    to="/generoydiversidad"
                                    aria-current={location.pathname === "/generoydiversidad" ? "page" : undefined}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-fara-gray focus-visible:ring-fara-blue block px-4 py-2 text-sm font-bold uppercase hover:text-white focus-visible:ring-2 focus-visible:outline-0 focus-visible:ring-inset"
                                >
                                    Género FARA
                                </Link>
                                <Link
                                    to="/escuelas"
                                    aria-current={location.pathname === "/escuelas" ? "page" : undefined}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-fara-gray focus-visible:ring-fara-blue block px-4 py-2 text-sm font-bold uppercase hover:text-white focus-visible:ring-2 focus-visible:outline-0 focus-visible:ring-inset"
                                >
                                    Escuelas FARA
                                </Link>
                                <Link
                                    to="/relacionestrabajo"
                                    aria-current={location.pathname === "/relacionestrabajo" ? "page" : undefined}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:bg-fara-gray focus-visible:ring-fara-blue block px-4 py-2 text-sm font-bold uppercase hover:text-white focus-visible:ring-2 focus-visible:outline-0 focus-visible:ring-inset"
                                >
                                    FARA para Organizaciones
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className="group focus-visible:ring-fara-blue focus-visible:ring-2 focus-visible:outline-0">
                        <Link
                            to="/capacitaciones"
                            aria-current={location.pathname === "/capacitaciones" ? "page" : undefined}
                            aria-label="Capacitaciones en justicia restaurativa y formación profesional"
                            onClick={() => setIsOpen(false)}
                            className="focus-visible:ring-fara-blue border-b-4 border-b-white px-2 py-4 transition-all duration-300 ease-in-out group-hover:cursor-pointer group-hover:border-b-black focus:border-b-black focus-visible:ring-2 focus-visible:outline-0 active:border-b-black active:outline-0"
                        >
                            Capacitaciones
                            <span className="sr-only">en justicia restaurativa y formación profesional</span>
                        </Link>
                    </li>
                    <li className="group focus-visible:ring-fara-blue focus-visible:ring-2 focus-visible:outline-0">
                        <Link
                            to="/socios"
                            aria-current={location.pathname === "/socios" ? "page" : undefined}
                            className="focus-visible:ring-fara-blue border-b-4 border-b-white px-2 py-4 transition-all duration-300 ease-in-out group-hover:cursor-pointer group-hover:border-b-black focus:border-b-black focus-visible:ring-2 focus-visible:outline-0 active:border-b-black active:outline-0"
                        >
                            Socios
                            <span className="sr-only">de FARA</span>
                        </Link>
                    </li>
                    <li className="group focus-visible:ring-fara-blue focus-visible:ring-2 focus-visible:outline-0">
                        <Link
                            to="/asesoramiento"
                            aria-current={location.pathname === "/asesoramiento" ? "page" : undefined}
                            aria-label="Asesoramiento y servicios para organizaciones"
                            onClick={() => setIsOpen(false)}
                            className="focus-visible:ring-fara-blue border-b-4 border-b-white px-2 py-4 transition-all duration-300 ease-in-out group-hover:cursor-pointer group-hover:border-b-black focus:border-b-black focus-visible:ring-2 focus-visible:outline-0 active:border-b-black active:outline-0"
                        >
                            Asesoramiento
                            <span className="sr-only">y servicios para organizaciones</span>
                        </Link>
                    </li>
                </ul>

                {/* Botón de menú para móviles */}
                <div className="ml-auto flex lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? (
                            <img src={X} className="h-12 w-12" alt="" />
                        ) : (
                            <img src={MenuIcon} className="h-12 w-12" alt="" />
                        )}
                    </button>
                </div>

                {/* Botones de Donar y Participar */}
                <div className="ml-8 hidden gap-4 lg:flex">
                    <Link
                        to="/donar"
                        aria-current={location.pathname === "/donar" ? "page" : undefined}
                        className="skew-custom bg-fara-blue hover:bg-fara-gold active:bg-fara-gold focus:bg-fara-gold min-h-12 min-w-12 py-2 pr-8 pl-6 text-xl font-bold text-white uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer"
                    >
                        Doná
                    </Link>
                    <Link
                        to="/participa"
                        aria-current={location.pathname === "/participa" ? "page" : undefined}
                        aria-label="Participá en pasantías y voluntariados de FARA"
                        className="skew-custom bg-fara-red active:bg-fara-gold hover:bg-fara-gold focus:bg-fara-gold min-h-12 min-w-12 py-2 pr-8 pl-6 text-xl font-bold text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer"
                    >
                        Participá
                        <span className="sr-only">en pasantías y voluntariados de FARA</span>
                    </Link>
                </div>
            </div>

            {/* Menú desplegable en móviles */}
            {isOpen && (
                <div id="mobile-menu" className="mt-4 lg:hidden">
                    <ul className="flex flex-col gap-4 font-bold uppercase">
                        <li className="focus-visible:ring-fara-blue grid min-h-12 min-w-48 place-items-center focus-visible:ring-2 focus-visible:outline-0">
                            <Link
                                to="/institucional"
                                aria-current={location.pathname === "/institucional" ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray focus-visible:ring-fara-blue grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:ring-2 focus-visible:outline-0 active:text-white"
                            >
                                Sobre Institución
                            </Link>
                        </li>
                        <li className="focus-visible:ring-fara-blue grid min-h-12 min-w-48 place-items-center focus-visible:ring-2 focus-visible:outline-0">
                            <Link
                                to="/bibliotecafara"
                                aria-current={location.pathname === "/bibliotecafara" ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray focus-visible:ring-fara-blue grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:ring-2 focus-visible:outline-0 active:text-white"
                            >
                                Biblioteca FARA
                            </Link>
                        </li>
                        <li className="focus-visible:ring-fara-blue grid min-h-12 min-w-48 place-items-center focus-visible:ring-2 focus-visible:outline-0">
                            <Link
                                to="/agendafara"
                                aria-current={location.pathname === "/agendafara" ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray focus-visible:ring-fara-blue grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:ring-2 focus-visible:outline-0 active:text-white"
                            >
                                Agenda FARA
                            </Link>
                        </li>
                        <li className="focus-visible:ring-fara-blue grid min-h-12 min-w-48 place-items-center focus-visible:ring-2 focus-visible:outline-0">
                            <Link
                                to="/generoydiversidad"
                                aria-current={location.pathname === "/generoydiversidad" ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray focus-visible:ring-fara-blue grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:ring-2 focus-visible:outline-0 active:text-white"
                            >
                                Género FARA
                            </Link>
                        </li>
                        <li className="focus-visible:ring-fara-blue grid min-h-12 min-w-48 place-items-center focus-visible:ring-2 focus-visible:outline-0">
                            <Link
                                to="/escuelas"
                                aria-current={location.pathname === "/escuelas" ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray focus-visible:ring-fara-blue grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:ring-2 focus-visible:outline-0 active:text-white"
                            >
                                Escuelas FARA
                            </Link>
                        </li>
                        <li className="focus-visible:ring-fara-blue grid min-h-12 min-w-48 place-items-center focus-visible:ring-2 focus-visible:outline-0">
                            <Link
                                to="/relacionestrabajo"
                                aria-current={location.pathname === "/relacionestrabajo" ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray focus-visible:ring-fara-blue grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:ring-2 focus-visible:outline-0 active:text-white text-center"
                            >
                                FARA para Organizaciones
                            </Link>
                        </li>
                        <li className="focus-visible:ring-fara-blue grid min-h-12 min-w-48 place-items-center focus-visible:ring-2 focus-visible:outline-0">
                            <Link
                                to="/capacitaciones"
                                aria-current={location.pathname === "/capacitaciones" ? "page" : undefined}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray focus-visible:ring-fara-blue grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:ring-2 focus-visible:outline-0 active:text-white"
                            >
                                Capacitaciones
                            </Link>
                        </li>
                        <li className="focus-visible:ring-fara-blue grid min-h-12 min-w-48 place-items-center focus-visible:ring-2 focus-visible:outline-0">
                            <Link
                                to="/socios"
                                aria-current={location.pathname === "/socios" ? "page" : undefined}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray focus-visible:ring-fara-blue grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:ring-2 focus-visible:outline-0 active:text-white"
                            >
                                Socios
                            </Link>
                        </li>
                        <li className="focus-visible:ring-fara-blue grid min-h-12 min-w-48 place-items-center focus-visible:ring-2 focus-visible:outline-0">
                            <Link
                                to="/asesoramiento"
                                aria-current={location.pathname === "/asesoramiento" ? "page" : undefined}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray focus-visible:ring-fara-blue grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:ring-2 focus-visible:outline-0 active:text-white"
                            >
                                Asesoramiento
                            </Link>
                        </li>
                        <div className="m-2 text-center">
                            <hr className="m-12 my-0 mb-4 w-auto" />
                            <p className="font-bold uppercase">Se parte de nuestra ayuda:</p>
                        </div>
                        <li className="grid place-items-center">
                            <Link
                                to="/donar"
                                aria-current={location.pathname === "/donar" ? "page" : undefined}
                                className="skew-custom group bg-fara-blue hover:bg-fara-gold active:bg-fara-gold focus:bg-fara-gold grid min-h-12 w-48 place-items-center pr-8 pl-6 text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer"
                            >
                                Doná
                            </Link>
                        </li>
                        <li className="grid place-items-center">
                            <Link
                                to="/participa"
                                aria-current={location.pathname === "/participa" ? "page" : undefined}
                                aria-label="Participá en pasantías y voluntariados de FARA"
                                className="skew-custom bg-fara-red active:bg-fara-gold hover:bg-fara-gold focus:bg-fara-gold grid min-h-12 w-48 place-items-center pr-8 pl-6 text-white uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer"
                            >
                                Participá
                                <span className="sr-only">en pasantías y voluntariados de FARA</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
