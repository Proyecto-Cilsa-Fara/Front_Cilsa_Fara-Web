import { ColorBar, NavBar } from "./index"

export function Header() {
    return (
        <header className="fixed z-10 flex w-full flex-col">
            <ColorBar />

            <NavBar />
        </header>
    )
}
