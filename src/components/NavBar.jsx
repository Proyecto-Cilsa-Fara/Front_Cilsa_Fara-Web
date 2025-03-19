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

                    <Link to="#" className="text-xl font-bold">
                        <img src="/web-app-manifest-512x512.png" alt="Logo" className="w-20" />
                    </Link>
                </div>

                {/* Menú principal */}
                <ul className="mr-12 ml-auto hidden space-x-6 font-bold uppercase md:flex">
                    <li>
                        <Link to="#" className="hover:text-gray-400">
                            Institucional
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-400">
                            Capacitaciones
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:text-gray-400">
                            Socios
                        </Link>
                    </li>
                </ul>

                {/* Botones en la barra de navegación */}
                <div className="flex space-x-4">
                    <button className="rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600">Doná</button>
                    <button className="rounded-lg bg-green-500 px-4 py-2 hover:bg-green-600">Participá</button>
                </div>
            </div>

            {/* Menú desplegable en móviles */}
            {isOpen && (
                <ul className="mt-4 flex flex-col space-y-2 p-4 font-bold uppercase md:hidden">
                    <li>
                        <Link to="#" className="block py-2 hover:text-gray-400">
                            Institucional
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="block py-2 hover:text-gray-400">
                            Capacitaciones
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="block py-2 hover:text-gray-400">
                            Socios
                        </Link>
                    </li>
                </ul>
            )}
        </nav>
    )
}
