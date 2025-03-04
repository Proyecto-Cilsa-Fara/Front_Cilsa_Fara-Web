import { BrowserRouter, Routes, Route } from "react-router"

function App() {
    const WIP_MESSAGE = "Página aún en construcción..."
    const ERROR_MESSAGE = "¡UPS! Esa página no existe..."

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h2>{WIP_MESSAGE}</h2>} />
                <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
