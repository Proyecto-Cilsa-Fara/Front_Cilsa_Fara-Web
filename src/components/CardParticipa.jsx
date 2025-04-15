import PropTypes from "prop-types"
import { Link } from "react-router"

export function CardParticipa({ title, description, image, link }) {
    return (
        <li className="shadow-4xl relative z-0 grid place-items-center p-8">
            <div className="bg-fara-teal absolute top-0 left-0 z-0 h-full w-full p-8 [clip-path:polygon(0_10%,100%_0,100%_90%,0_100%)] lg:px-12 lg:py-18"></div>

            <div className="relative z-10 flex h-full flex-col justify-between gap-8 bg-white p-8 shadow-2xl">
                <img
                    src={image}
                    alt={`Imagen de ${title}`}
                    className="aspect-3/2 self-center lg:max-w-2/3"
                    width="1024px"
                    height="690px"
                />
                <div>
                    <h2 className="w-full p-2 text-center text-2xl font-bold lg:text-4xl">{title}</h2>
                    <p className="mb-5 max-w-[75ch] px-5 text-left text-lg lg:text-2xl">{description}</p>
                </div>
                <Link
                    to={link}
                    aria-label="Mirá todas nuestras capacitaciones"
                    className="skew-custom bg-fara-blue hover:[.text-outline-lg] hover:bg-fara-red focus:bg-fara-red active:bg-fara-red mx-auto grid min-h-12 w-5/6 min-w-48 place-items-center border-b-2 border-gray-200 pr-8 pl-6 text-base font-bold text-white uppercase transition-colors duration-300 ease-in-out md:w-1/2 md:text-2xl lg:min-h-24 xl:w-2/3"
                >
                    Ver más
                </Link>
            </div>
        </li>
    )
}

CardParticipa.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}
