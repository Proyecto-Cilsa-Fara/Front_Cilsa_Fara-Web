import { ColorBar } from "../components"
import { useForm } from "react-hook-form"

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
            <header className="flex h-1/5">
                <ColorBar />
            </header>
            <main className="flex h-screen bg-white">
                {/* Contenedor del Formulario */}
                <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2">
                    <a href="/landing" className="m-auto box-border block">
                        <img
                            src="/web-app-manifest-512x512.png"
                            className="h-32 w-auto p-2"
                            alt="Logo Acción Restaurativa Argentina"
                        />
                    </a>
                    <h2 className="mb-4 text-center text-4xl font-bold uppercase">Iniciar sesión</h2>
                    <form className="w-full max-w-md p-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label
                                htmlFor="loginEmail"
                                className="relative block min-h-[50px] rounded-sm border border-black p-3 shadow-xs focus-within:border-black focus-within:ring-1 focus-within:ring-black"
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
                                <div className="mt-3 w-full rounded-sm border-l-6 border-l-red-600 bg-red-200 p-2">
                                    <p className="text-sm font-semibold">Por favor ingrese un email válido</p>
                                </div>
                            )}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="loginPass"
                                className="relative block min-h-[50px] rounded-sm border border-black p-3 shadow-xs focus-within:border-black focus-within:ring-1 focus-within:ring-black"
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
                                <div className="mt-3 w-full rounded-sm border-l-6 border-l-red-600 bg-red-200 p-2">
                                    <p className="text-sm font-semibold">Contraseña incorrecta.</p>
                                </div>
                            )}
                        </div>
                        <button
                            className="block w-1/2 cursor-pointer bg-lime-400 py-2 font-bold text-black uppercase transition hover:border-black hover:bg-black hover:text-white"
                            type="submit"
                        >
                            Iniciar sesión
                        </button>
                    </form>
                    <div className="mb-auto p-3">
                        <p className="mt-4 text-center text-gray-800">
                            ¿Olvidaste las credenciales?{" "}
                            <a href="#" className="underline">
                                Recuperar
                            </a>
                        </p>
                        <p className="mt-4 cursor-pointer text-center text-gray-800 underline">
                            <a href="#">Contáctate con el administrador de la página.</a>
                        </p>
                    </div>
                    <p className="mt-auto text-center text-gray-600" aria-label="Mensaje de footer">
                        {FOOTER_MESSAGE}
                    </p>
                </div>

                {/* Contenedor de la Imagen (Se oculta en pantallas pequeñas) */}
                <div className="hidden w-1/2 items-center justify-center bg-cover md:flex">
                    <img
                        src="https://s3-alpha-sig.figma.com/img/c040/157a/02b257935a70d16c34e26febb90c0fa4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TuW-MKx9Epfc32~LCUMzkf1xKLmq0Mn6qXYaGG-Y5bCm8W53hjhrpxfAxYcG8B2QMOE0P7wc8zIcsZIuRHdmz3I4diuMyHtpCCabcEaoJaxvamoJIdpS2Ag-vjAvoDLgu0lGf8Gsf04bKA4h8Smml~yfGezTnWR3NjHDsf31wrVcYZivcsO-T~KjKLIf9NxDA9EseGvbSOvBxuUYIOYuzY-wtW5igdLDsQ74QO~OXtpo9MnKYqz6AEXQk1uUP0SuI-U1qHR7ddfVSBYkraLWUy4d9U9X97iz3U5yacowwAcI1fmrx0YG9H622diAIDXJrh0x2Ck7-OA7Ti-sZWO9jA__"
                        alt="Imagen de Acción Restaurativa Argentina"
                        className="h-screen w-full object-cover"
                        loading="lazy"
                    />
                </div>
            </main>
            <footer className="flex h-1/5">
                <ColorBar />
            </footer>
        </div>
    )
}
