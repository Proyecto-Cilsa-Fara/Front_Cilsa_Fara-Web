import { useState } from "react"
import { Link } from "react-router"
import { X, MenuIcon } from "../assets/icons"
import faraLogoImage from "../assets/LOGO-FARA.webp"
import faraLogoImageRetina from "../assets/LOGO-FARA-retina.webp"
import faraLogoImage4k from "../assets/LOGO-FARA-4k.webp"

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white p-4 text-black">
            <div className="relative flex w-full items-center justify-between">
                {/* Logo */}
                <div>
                    <Link
                        to="/"
                        className="grid min-h-12 min-w-12 place-items-center border-4 border-white p-2 transition-all duration-300 ease-in-out hover:cursor-pointer hover:border-black focus:border-black focus:outline-0 active:border-black active:outline-0"
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
                        <li className="group grid min-h-12 min-w-12 place-items-center focus:outline-0">
                            <Link
                                to="/institucional"
                                className="border-b-4 border-b-white p-4 transition-all duration-300 ease-in-out group-hover:cursor-pointer group-hover:border-b-black focus:border-b-black focus:outline-0 active:border-b-black active:outline-0"
                            >
                                Institucional
                            </Link>
                        </li>
                        <li className="group grid min-h-12 min-w-12 place-items-center focus:outline-0">
                            <Link
                                to="/capacitaciones"
                                className="border-b-4 border-b-white p-4 transition-all duration-300 ease-in-out group-hover:cursor-pointer group-hover:border-b-black focus:border-b-black focus:outline-0 active:border-b-black active:outline-0"
                            >
                                Capacitaciones
                            </Link>
                        </li>
                        <li className="group grid min-h-12 min-w-12 place-items-center focus:outline-0">
                            <Link
                                to="/socios"
                                className="border-b-4 border-b-white p-4 transition-all duration-300 ease-in-out group-hover:cursor-pointer group-hover:border-b-black focus:border-b-black focus:outline-0 active:border-b-black active:outline-0"
                            >
                                Socios
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Botón de menú para móviles */}
                <div className="ml-auto flex lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? <img src={X} className="h-12 w-12" /> : <img src={MenuIcon} className="h-12 w-12" />}
                    </button>
                </div>

                {/* Botones de Donar y Participar */}
                <div className="ml-8 hidden gap-4 lg:flex">
                    <Link
                        to="/donar"
                        className="skew-custom bg-fara-blue hover:bg-fara-gold active:bg-fara-gold focus:bg-fara-gold min-h-12 min-w-12 py-2 pr-8 pl-6 text-xl font-bold text-white uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer"
                    >
                        Doná
                    </Link>
                    <Link
                        to="/participa"
                        className="skew-custom bg-fara-red active:bg-fara-gold hover:bg-fara-gold focus:bg-fara-gold min-h-12 min-w-12 py-2 pr-8 pl-6 text-xl font-bold text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer"
                    >
                        Participá
                    </Link>
                </div>
            </div>

            {/* Menú desplegable en móviles */}
            {isOpen && (
                <div className="mt-4 lg:hidden">
                    <ul className="flex flex-col gap-4 font-bold uppercase">
                        <li className="grid min-h-12 min-w-48 place-items-center focus:outline-0">
                            <Link
                                to="/institucional"
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus:outline-0 active:text-white"
                            >
                                Institucional
                            </Link>
                        </li>
                        <li className="grid min-h-12 min-w-48 place-items-center focus:outline-0">
                            <Link
                                to="/capacitaciones"
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus:outline-0 active:text-white"
                            >
                                Capacitaciones
                            </Link>
                        </li>
                        <li className="grid min-h-12 min-w-48 place-items-center focus:outline-0">
                            <Link
                                to="/socios"
                                className="hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray grid min-h-12 w-48 place-items-center p-2 transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white focus:outline-0 active:text-white"
                            >
                                Socios
                            </Link>
                        </li>
                        <div className="m-2 text-center">
                            <hr className="m-12 my-0 mb-4 w-auto" />
                            <p className="font-bold uppercase">Se parte de nuestra ayuda:</p>
                        </div>
                        <li className="grid place-items-center">
                            <Link
                                to="/donar"
                                className="skew-custom group bg-fara-blue hover:bg-fara-gold active:bg-fara-gold focus:bg-fara-gold grid min-h-12 w-48 place-items-center pr-8 pl-6 text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer"
                            >
                                Doná
                            </Link>
                        </li>
                        <li className="grid place-items-center">
                            <Link
                                to="/participa"
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
