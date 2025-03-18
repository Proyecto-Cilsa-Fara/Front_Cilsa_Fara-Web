import { ColorBar } from "../components"
export function LoginPage() {
    const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."
    return (
        <div className="flex h-screen grow flex-col">
            <header className="h-1/5">
                <ColorBar />
                {/* Reemplazar etiqueta nav por componente Navbar */}
                <nav className="flex items-center justify-between p-7">
                    <img src="/public/web-app-manifest-512x512.png" alt="#" className="h-24" />
                    <h2 className="font-bold text-red-500">Aca va el componente Navbar</h2>
                    <span className="text-lg font-semibold">Links</span>
                </nav>
            </header>
            <main className="flex h-screen bg-white">
                {/* Contenedor del Formulario */}
                <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
                    <h2 className="mb-4 text-center text-4xl font-bold uppercase">Iniciar sesión</h2>
                    <form className="w-full max-w-md p-6">
                        <div className="mb-4">
                            <label className="mb-2 block font-semibold text-gray-700">Correo Electrónico</label>
                            <input
                                type="email"
                                className="w-full rounded-sm border border-black p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="mb-2 block font-semibold text-gray-700">Contraseña</label>
                            <input
                                type="password"
                                className="w-full rounded-sm border border-black p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>
                        <button className="w-1/3 bg-lime-400 py-2 font-bold text-black uppercase transition hover:bg-lime-500">
                            Iniciar
                        </button>
                    </form>
                    <div>
                        <p className="mt-4 text-center text-gray-800">
                            ¿Olvidaste las credenciales?{" "}
                            <a href="#" className="underline">
                                Recuperar
                            </a>
                        </p>
                        <p className="mt-4 cursor-pointer text-center text-gray-800 underline">
                            <a>Contáctate con el administrador de la página.</a>
                        </p>
                    </div>
                    <p className="mt-4 text-center text-gray-600">{FOOTER_MESSAGE}</p>
                </div>

                {/* Contenedor de la Imagen (Se oculta en pantallas pequeñas) */}
                <div className="hidden w-1/2 items-center justify-center bg-cover md:flex">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/c040/157a/02b257935a70d16c34e26febb90c0fa4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TuW-MKx9Epfc32~LCUMzkf1xKLmq0Mn6qXYaGG-Y5bCm8W53hjhrpxfAxYcG8B2QMOE0P7wc8zIcsZIuRHdmz3I4diuMyHtpCCabcEaoJaxvamoJIdpS2Ag-vjAvoDLgu0lGf8Gsf04bKA4h8Smml~yfGezTnWR3NjHDsf31wrVcYZivcsO-T~KjKLIf9NxDA9EseGvbSOvBxuUYIOYuzY-wtW5igdLDsQ74QO~OXtpo9MnKYqz6AEXQk1uUP0SuI-U1qHR7ddfVSBYkraLWUy4d9U9X97iz3U5yacowwAcI1fmrx0YG9H622diAIDXJrh0x2Ck7-OA7Ti-sZWO9jA__"
                        alt="#"
                        className="h-screen w-full object-cover"
                    />
                </div>
            </main>
            <footer className="flex-col gap-4">
                <ColorBar />
            </footer>
        </div>
    )
}
