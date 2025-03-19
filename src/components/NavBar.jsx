import { useState } from "react"
import { Link } from "react-router"
import { X, MenuIcon } from "../assets/icons"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="bg-white p-4 text-black">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    {/* Botón de menú para móviles */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? <img src={X} className="h-8 w-8" /> : <img src={MenuIcon} className="h-8 w-8" />}
                    </button>

                    <Link to="#">
                        <img src="/web-app-manifest-512x512.png" alt="Logo" className="w-20" />
                    </Link>
                </div>

                {/* Menú principal */}
                <ul className="mr-12 ml-auto hidden space-x-6 font-bold uppercase md:flex">
                    <li>
                        <Link to="#" className="hover:underline">
                            Institucional
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:underline">
                            Capacitaciones
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:underline">
                            Socios
                        </Link>
                    </li>
                </ul>

                {/* Botones en la barra de navegación */}
                <div className="flex space-x-4">
                    <button className="skew-custom bg-blue-500 px-4 py-2 text-white uppercase hover:bg-blue-600">
                        <p className="text-xl font-bold drop-shadow-[0.7px_0.7px_0.7px_black]">Doná</p>
                    </button>
                    <button className="skew-custom bg-red-700 text-white hover:bg-red-800">
                        <p className="text-xl font-bold drop-shadow-[0.7px_0.7px_0.7px_black]">Participá</p>
                    </button>
                </div>
            </div>

            {/* Menú desplegable en móviles */}
            {isOpen && (
                <ul className="mt-4 flex flex-col space-y-2 p-4 font-bold uppercase md:hidden">
                    <li>
                        <Link to="#" className="block py-2">
                            Institucional
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="block py-2">
                            Capacitaciones
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="block py-2">
                            Socios
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}
