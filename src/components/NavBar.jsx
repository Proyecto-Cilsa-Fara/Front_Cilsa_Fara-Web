import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from "react-router"
import { X, MenuIcon } from "../assets/icons"
import faraLogoImage from "../assets/LOGO-FARA.webp"
import faraLogoImageRetina from "../assets/LOGO-FARA-retina.webp"
import faraLogoImage4k from "../assets/LOGO-FARA-4k.webp"

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const dropdownRef = useRef(null)
    const buttonRef = useRef(null)
    const location = useLocation()
    const institucionalPaths = ["/institucional", "/bibliotecafara", "/agendafara", "/testimonios"]
    const isInstitucionalActive = institucionalPaths.includes(location.pathname)

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    return (
        <nav className="bg-white p-4 text-black">
            <div className="relative flex w-full items-center justify-between">
                {/* Logo */}
                <div>
                    <Link
                        to="/"
                        aria-current={location.pathname === '/' ? 'page' : undefined}
                        className="grid min-h-12 min-w-12 place-items-center border-4 border-white p-2 transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-black focus:border-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue active:border-black active:outline-0"
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
                </div>

                {/* Links Centrados */}
                <div className="absolute left-1/2 hidden -translate-x-1/2 lg:flex">
                    <ul className="flex gap-4 font-bold uppercase">
                        <li ref={dropdownRef} className="relative group grid min-h-12 min-w-12 place-items-center focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue">
                            <button
                                ref={buttonRef}
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                onKeyDown={(e) => { if (e.key === "Escape") { setDropdownOpen(false); buttonRef.current?.focus() } }}
                                aria-haspopup="true"
                                aria-expanded={dropdownOpen}
                                className={`border-b-4 p-4 transition-all duration-300 ease-in-out group-hover:cursor-pointer focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue flex items-center gap-1 ${isInstitucionalActive ? "border-b-black" : "border-b-white"} hover:border-b-black`}
                            >
                                Institución
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round"
                                    aria-hidden="true" focusable="false"
                                    className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            {/* Dropdown Menu — visible when open OR on group-hover (desktop pointer:fine) */}
                            <div className={`${dropdownOpen ? "block" : "hidden"} group-hover:block pointer-coarse:group-hover:hidden absolute left-0 top-full z-10 mt-0 min-w-48 bg-white shadow-lg border border-gray-200`}>
                                <ul role="menu" className="py-1">
                                    <li role="none">
                                        <Link
                                            to="/institucional"
                                            role="menuitem"
                                            aria-current={location.pathname === "/institucional" ? "page" : undefined}
                                            onClick={() => setDropdownOpen(false)}
                                            className="block px-4 py-2 text-sm font-bold uppercase hover:bg-fara-gray hover:text-white focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue focus-visible:ring-inset"
                                        >
                                            Sobre Institución
                                        </Link>
                                    </li>
                                    <li role="none">
                                        <Link
                                            to="/bibliotecafara"
                                            role="menuitem"
                                            aria-current={location.pathname === "/bibliotecafara" ? "page" : undefined}
                                            onClick={() => setDropdownOpen(false)}
                                            className="block px-4 py-2 text-sm font-bold uppercase hover:bg-fara-gray hover:text-white focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue focus-visible:ring-inset"
                                        >
                                            Biblioteca FARA
                                        </Link>
                                    </li>
                                    <li role="none">
                                        <Link
                                            to="/agendafara"
                                            role="menuitem"
                                            aria-current={location.pathname === "/agendafara" ? "page" : undefined}
                                            onClick={() => setDropdownOpen(false)}
                                            className="block px-4 py-2 text-sm font-bold uppercase hover:bg-fara-gray hover:text-white focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue focus-visible:ring-inset"
                                        >
                                            Agenda FARA
                                        </Link>
                                    </li>
                                    <li role="none">
                                        <Link
                                            to="/testimonios"
                                            role="menuitem"
                                            aria-current={location.pathname === "/testimonios" ? "page" : undefined}
                                            onClick={() => setDropdownOpen(false)}
                                            className="block px-4 py-2 text-sm font-bold uppercase hover:bg-fara-gray hover:text-white focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue focus-visible:ring-inset"
                                        >
                                            Testimonios
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="group grid min-h-12 min-w-12 place-items-center focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue">
                            <Link
                                to="/capacitaciones"
                                aria-current={location.pathname === '/capacitaciones' ? 'page' : undefined}
                                className="border-b-4 border-b-white p-4 transition-all duration-300 ease-in-out group-hover:cursor-pointer group-hover:border-b-black focus:border-b-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue active:border-b-black active:outline-0"
                            >
                                Capacitaciones
                            </Link>
                        </li>
                        <li className="group grid min-h-12 min-w-12 place-items-center focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue">
                            <Link
                                to="/socios"
                                aria-current={location.pathname === '/socios' ? 'page' : undefined}
                                className="border-b-4 border-b-white p-4 transition-all duration-300 ease-in-out group-hover:cursor-pointer group-hover:border-b-black focus:border-b-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue active:border-b-black active:outline-0"
                            >
                                Socios
                            </Link>
                        </li>
                        <li className="group grid min-h-12 min-w-12 place-items-center focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue">
                            <Link
                                to="/asesoramiento"
                                aria-current={location.pathname === '/asesoramiento' ? 'page' : undefined}
                                className="border-b-4 border-b-white p-4 transition-all duration-300 ease-in-out group-hover:cursor-pointer group-hover:border-b-black focus:border-b-black focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue active:border-b-black active:outline-0"
                            >
                                Asesoramiento
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Botón de menú para móviles */}
                <div className="ml-auto flex lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                    >
                        {isOpen ? <img src={X} className="h-12 w-12" alt="" /> : <img src={MenuIcon} className="h-12 w-12" alt="" />}
                    </button>
                </div>

                {/* Botones de Donar y Participar */}
                <div className="ml-8 hidden gap-4 lg:flex">
                    <Link
                        to="/donar"
                        aria-current={location.pathname === '/donar' ? 'page' : undefined}
                        className="skew-custom bg-fara-blue hover:bg-fara-gold active:bg-fara-gold focus:bg-fara-gold min-h-12 min-w-12 py-2 pr-8 pl-6 text-xl font-bold text-white uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer"
                    >
                        Doná
                    </Link>
                    <Link
                        to="/participa"
                        aria-current={location.pathname === '/participa' ? 'page' : undefined}
                        className="skew-custom bg-fara-red active:bg-fara-gold hover:bg-fara-gold focus:bg-fara-gold min-h-12 min-w-12 py-2 pr-8 pl-6 text-xl font-bold text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer"
                    >
                        Participá
                    </Link>
                </div>
            </div>

            {/* Menú desplegable en móviles */}
            {isOpen && (
                <div id="mobile-menu" className="mt-4 lg:hidden">
                    <ul className="flex flex-col gap-4 font-bold uppercase">
                        <li className="grid min-h-12 min-w-48 place-items-center focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue">
                            <Link
                                to="/institucional"
                                aria-current={location.pathname === "/institucional" ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue active:text-white"
                            >
                                Sobre Institución
                            </Link>
                        </li>
                        <li className="grid min-h-12 min-w-48 place-items-center focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue">
                            <Link
                                to="/bibliotecafara"
                                aria-current={location.pathname === "/bibliotecafara" ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue active:text-white"
                            >
                                Biblioteca FARA
                            </Link>
                        </li>
                        <li className="grid min-h-12 min-w-48 place-items-center focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue">
                            <Link
                                to="/agendafara"
                                aria-current={location.pathname === "/agendafara" ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue active:text-white"
                            >
                                Agenda FARA
                            </Link>
                        </li>
                        <li className="grid min-h-12 min-w-48 place-items-center focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue">
                            <Link
                                to="/testimonios"
                                aria-current={location.pathname === "/testimonios" ? "page" : undefined}
                                onClick={() => setIsOpen(false)}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue active:text-white"
                            >
                                Testimonios
                            </Link>
                        </li>
                        <li className="grid min-h-12 min-w-48 place-items-center focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue">
                            <Link
                                to="/capacitaciones"
                                aria-current={location.pathname === '/capacitaciones' ? 'page' : undefined}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue active:text-white"
                            >
                                Capacitaciones
                            </Link>
                        </li>
                        <li className="grid min-h-12 min-w-48 place-items-center focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue">
                            <Link
                                to="/socios"
                                aria-current={location.pathname === '/socios' ? 'page' : undefined}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue active:text-white"
                            >
                                Socios
                            </Link>
                        </li>
                        <li className="grid min-h-12 min-w-48 place-items-center focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue">
                            <Link
                                to="/asesoramiento"
                                aria-current={location.pathname === '/asesoramiento' ? 'page' : undefined}
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-fara-blue active:text-white"
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
                                aria-current={location.pathname === '/donar' ? 'page' : undefined}
                                className="skew-custom group bg-fara-blue hover:bg-fara-gold active:bg-fara-gold focus:bg-fara-gold grid min-h-12 w-48 place-items-center pr-8 pl-6 text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer"
                            >
                                Doná
                            </Link>
                        </li>
                        <li className="grid place-items-center">
                            <Link
                                to="/participa"
                                aria-current={location.pathname === '/participa' ? 'page' : undefined}
                                className="skew-custom bg-fara-red active:bg-fara-gold hover:bg-fara-gold focus:bg-fara-gold grid min-h-12 w-48 place-items-center pr-8 pl-6 text-white uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer"
                            >
                                Participá
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}
