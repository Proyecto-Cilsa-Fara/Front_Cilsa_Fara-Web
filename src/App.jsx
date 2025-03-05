import { BrowserRouter, Routes, Route } from "react-router"
import { WIPPage } from "./pages"

function App() {
    const ERROR_MESSAGE = "¡UPS! Esa página no existe..."

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WIPPage />} />
                <Route path="*" element={<h2>{ERROR_MESSAGE}</h2>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
