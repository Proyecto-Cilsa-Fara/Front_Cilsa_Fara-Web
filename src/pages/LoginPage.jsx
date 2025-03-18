import { ColorBar } from "../components"
export function LoginPage() {
    return (
        <div className="flex h-screen grow flex-col">
            <header className="h-1/5">
                <ColorBar />
                {/* Reemplazar etiqueta nav por componente Navbar */}
                <nav className="flex items-center justify-between p-7">
                    <h1 className="text-3xl font-bold">Logo FARA</h1>
                    <h2 className="font-bold text-red-500">Aca va el componente Navbar</h2>
                    <span className="text-lg font-semibold">Links</span>
                </nav>
            </header>
            <footer className="flex-col gap-4">
                <ColorBar />
            </footer>
        </div>
    )
}
