import { useState } from "react"
import { Link } from "react-router"
import { X, MenuIcon } from "../assets/icons"
import faraLogoImage from "../assets/LOGO-FARA.webp"

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white p-4 text-black">
            <div className="flex w-full items-center justify-between">
                <Link to="/" className="hover:cursor-pointer">
                    <img
                        src={faraLogoImage}
                        alt="Logo de FARA que actúa como link a la página de inicio."
                        className="h-12 w-auto"
                    />
                </Link>

                <div className="flex gap-8">
                    {/* Botón de menú para móviles */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? <img src={X} className="h-12 w-12" /> : <img src={MenuIcon} className="h-12 w-12" />}
                    </button>

                    {/* Menú principal */}
                    <ul className="hidden gap-4 font-bold uppercase md:flex">
                        <li>
                            <Link
                                to="/institucional"
                                className="grid min-h-12 min-w-12 place-items-center hover:cursor-pointer hover:underline"
                            >
                                Institucional
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/capacitaciones"
                                className="grid min-h-12 min-w-12 place-items-center hover:cursor-pointer hover:underline"
                            >
                                Capacitaciones
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/socios"
                                className="grid min-h-12 min-w-12 place-items-center hover:cursor-pointer hover:underline"
                            >
                                Socios
                            </Link>
                        </li>
                    </ul>

                    {/* Botones en la barra de navegación */}
                    <div className="hidden gap-4 md:flex">
                        <Link
                            to="/donar"
                            className="text-outline-lg skew-custom bg-fara-cyan hover:bg-fara-gold min-h-12 min-w-12 py-2 pr-8 pl-6 text-xl font-bold text-white uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer"
                        >
                            DONÁ
                        </Link>
                        <Link
                            to="/participa"
                            className="skew-custom text-outline-lg bg-fara-red hover:bg-fara-strong-red min-h-12 min-w-12 py-2 pr-8 pl-6 text-xl font-bold text-white transition-colors duration-300 ease-in-out hover:cursor-pointer"
                        >
                            PARTICIPÁ
                        </Link>
                    </div>
                </div>
            </div>

            {/* Menú desplegable en móviles */}
            {isOpen && (
                <ul className="mt-4 flex flex-col gap-2 font-bold uppercase md:hidden">
                    <li>
                        <Link
                            to="/institucional"
                            className="grid min-h-12 min-w-12 place-items-center hover:cursor-pointer"
                        >
                            Institucional
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/capacitaciones"
                            className="grid min-h-12 min-w-12 place-items-center hover:cursor-pointer"
                        >
                            Capacitaciones
                        </Link>
                    </li>
                    <li>
                        <Link to="/socios" className="grid min-h-12 min-w-12 place-items-center hover:cursor-pointer">
                            Socios
                        </Link>
                    </li>
                    <li className="skew-custom grid min-h-12 min-w-48 place-items-center self-center bg-blue-500 pr-8 pl-6 text-white uppercase hover:cursor-pointer hover:bg-blue-600">
                        <Link to="/donar" className="text-outline-sm">
                            DONÁ
                        </Link>
                    </li>
                    <li className="skew-custom grid min-h-12 min-w-48 place-items-center self-center bg-red-700 pr-8 pl-6 text-white hover:cursor-pointer hover:bg-red-800">
                        <Link to="/participa" className="text-outline-sm">
                            PARTICIPÁ
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}
