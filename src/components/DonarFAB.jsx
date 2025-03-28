import { Link } from "react-router"

export function DonarFAB() {
    return (
        <Link
            to="/donar"
            className="bg-fara-gold hover:bg-fara-gray active:bg-fara-gray focus:bg-fara-gray fixed right-4 bottom-16 z-10 grid h-28 w-28 place-items-center rounded-[50%] border-2 border-black text-xl font-bold text-black uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white focus:text-white active:text-white"
        >
            Donar
        </Link>
    )
}
