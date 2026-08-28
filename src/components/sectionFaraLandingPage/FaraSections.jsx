import { Link } from "react-router"
import { FaraEscuelasImg, FaraGeneroDiversidadImg, FaraRelacionesLaboralesImg } from "../../assets/landing/index"

const faraSectionLinks = [
    {
        title: "FARA GÉNERO",
        url: "/generoydiversidad",
        desc: "Cuida a las personas y exige responsabilidad.",
        backgroundImg: FaraGeneroDiversidadImg,
    },
    {
        title: "FARA ESCUELAS",
        url: "/escuelas",
        desc: "La escuela construye ciudadanía y convivencia.",
        backgroundImg: FaraEscuelasImg,
    },
    {
        title: "FARA PARA ORGANIZACIONES",
        url: "/relacionestrabajo",
        desc: "Un enfoque restaurativo para transformar los conflictos laborales.",
        backgroundImg: FaraRelacionesLaboralesImg,
    },
]

export function FaraSections() {
    return (
        <section className="w-full bg-amber-200">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {faraSectionLinks.map((sItem) => (
                    <div className="relative h-96 bg-black/50 text-white">
                        <img className="absolute z-10 h-full w-full object-cover" src={sItem.backgroundImg} />
                        {/* Capa de color con opacidad */}
                        <div className="absolute top-0 left-0 z-20 h-full w-full bg-black/60"></div>
                        <div className="flex h-full flex-col gap-10 items-center justify-center p-5 relative z-30 text-center">
                            <h2 className="text-3xl font-extrabold">{sItem.title}</h2>
                            <p className="text-base text-wrap md:text-lg">"{sItem.desc}"</p>
                            <Link
                                to={sItem.url}
                                aria-current={sItem.url}
                                className="skew-custom bg-fara-blue hover:bg-fara-gold w-48 py-3 text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer font-semibold"
                            >
                                Ver más
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
