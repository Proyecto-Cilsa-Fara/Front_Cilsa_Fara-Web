import PropTypes from "prop-types"
import { Link } from "react-router"
import CardCursoImage from "../assets/CardCursoImage.webp"

export function CardCurso({ title, description, image = CardCursoImage, link }) {
    return (
        <div className="bg-fara-teal group hover:bg-fara-lime focus:bg-fara-lime active:bg-fara-lime [&:has(a:hover)]:bg-fara-lime [&:has(a:focus)]:bg-fara-lime [&:has(a:active)]:bg-fara-lime -skew-y-6 px-4 py-2 shadow-2xl transition-colors duration-500 ease-in-out hover:skew-y-6 focus:skew-y-6 active:skew-y-6 [&:has(a:active)]:skew-y-6 [&:has(a:focus)]:skew-y-6 [&:has(a:hover)]:skew-y-6">
            <Link
                className="flex h-full w-full max-w-80 skew-y-6 flex-col items-center justify-between gap-6 bg-white shadow-xl group-hover:-skew-y-6 group-focus:-skew-y-6 group-active:-skew-y-6 hover:-skew-y-6 focus:-skew-y-6 active:-skew-y-6"
                to={link}
                aria-label={`Anotarse al curso ${title}`}
            >
                <img
                    src={image}
                    alt={`Imagen de ${title}`}
                    className="aspect-3/2 w-full overflow-hidden object-cover object-top"
                    height="266px"
                    width="1024px"
                />
                <h2 className="w-full p-2 text-center text-lg font-bold lg:text-xl">{title}</h2>
                <p className="mb-5 max-w-[75ch] px-5 text-justify text-base">{description}</p>
            </Link>
        </div>
    )
}

CardCurso.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}
