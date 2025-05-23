import { ColorBar } from "../components"
import { useForm } from "react-hook-form"
import BannerVertical from "../assets/Login-Image.webp"
import { Link } from "react-router"

export function LoginPage() {
    const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div className="flex h-screen grow flex-col">
            <header>
                <ColorBar />
            </header>
            <main className="flex min-h-[calc(100vh-2rem)] bg-white">
                {/* Contenedor del Formulario */}
                <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
                    <Link to="/" className="m-auto box-border block" aria-label="Volver a la página de inicio de FARA.">
                        <img
                            src="/web-app-manifest-512x512.png"
                            className="h-32 w-auto p-2"
                            alt="Imagotipo de la Fundación Acción Restaurativa Argentina"
                        />
                    </Link>
                    <h1 className="mb-4 text-center text-4xl font-bold uppercase">Iniciar sesión</h1>
                    <form className="w-full max-w-md p-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label
                                htmlFor="loginEmail"
                                className="relative block min-h-12 rounded-sm border border-black p-3 shadow-xs focus-within:border-black focus-within:ring-1 focus-within:ring-black"
                            >
                                <input
                                    type="email"
                                    id="loginEmail"
                                    className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-none"
                                    placeholder="Correo electrónico"
                                    autoComplete="off"
                                    {...register("loginEmail", {
                                        required: true,
                                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        maxLength: 20,
                                    })}
                                />
                                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                                    Correo electrónico
                                </span>
                            </label>
                            {errors.loginEmail?.type === "required" && (
                                <div className="border-l-fara-strong-red mt-3 w-full rounded-sm border-l-6 bg-red-200 p-2">
                                    <p className="text-sm font-semibold">Por favor ingrese un email válido</p>
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="loginPass"
                                className="relative block min-h-12 rounded-sm border border-black p-3 shadow-xs focus-within:border-black focus-within:ring-1 focus-within:ring-black"
                            >
                                <input
                                    type="password"
                                    id="loginPass"
                                    className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:ring-0 focus:outline-none"
                                    placeholder="Contraseña"
                                    autoComplete="off"
                                    {...register("loginPass", { required: true, minLength: 8, maxLength: 20 })}
                                />

                                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white px-1 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
                                    Contraseña
                                </span>
                            </label>
                            {errors.loginPass?.type === "required" && (
                                <div className="border-l-fara-strong-red mt-3 w-full rounded-sm border-l-6 bg-red-200 p-2">
                                    <p className="text-sm font-semibold">Contraseña incorrecta.</p>
                                </div>
                            )}
                        </div>
                        <button
                            className="bg-fara-lime mx-auto block w-1/2 cursor-pointer py-2 font-bold text-black uppercase transition hover:border-black hover:bg-black hover:text-white focus:border-black focus:bg-black focus:text-white active:border-black active:bg-black active:text-white"
                            type="submit"
                        >
                            Iniciar sesión
                        </button>
                    </form>
                    <div className="mb-auto p-3">
                        <p className="mt-4 text-center text-gray-800">
                            ¿Olvidaste las credenciales?{" "}
                            <Link to="/recuperar-contraseña" className="underline">
                                Recuperar
                            </Link>
                        </p>
                        <p className="mt-4 cursor-pointer text-center text-gray-800 underline">
                            <Link to="/contacto-administrador">Contáctate con el administrador de la página.</Link>
                        </p>
                    </div>
                    <p className="mt-auto text-center text-gray-600" aria-label="Mensaje de footer">
                        {FOOTER_MESSAGE}
                    </p>
                </div>

                {/* Contenedor de la Imagen (Se oculta en pantallas pequeñas) */}
                <div className="hidden w-1/2 items-center justify-center bg-cover md:flex">
                    <img
                        src={BannerVertical}
                        alt="Mesa de trabajo con una cámara profesional y una laptop abierta mostrando edición de fotos en un estudio luminoso y moderno, con personas conversando en el fondo."
                        className="h-screen w-full object-cover"
                        loading="lazy"
                    />
                </div>
            </main>
            <footer>
                <ColorBar />
            </footer>
        </div>
    )
}
