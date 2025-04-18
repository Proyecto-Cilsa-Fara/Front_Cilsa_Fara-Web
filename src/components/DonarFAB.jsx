import { Link } from "react-router"

export function DonarFAB() {
    return (
        <Link
            to="https://cafecito.app/fundacionfara"
            aria-label="Realizar donación"
            className="bg-fara-gold hover:bg-fara-gray active:bg-fara-gray focus:bg-fara-gray fixed right-4 bottom-16 z-10 grid h-16 w-16 place-items-center rounded-[50%] border-2 border-black text-xs font-bold text-black uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white active:text-white lg:h-28 lg:w-28 lg:border-4 lg:text-xl"
        >
            Donar
        </Link>
    )
}
