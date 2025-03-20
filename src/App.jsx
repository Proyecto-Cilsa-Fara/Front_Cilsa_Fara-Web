import { BrowserRouter, Routes, Route } from "react-router"
import { ErrorPage, LandingPage, WIPPage, LoginPage } from "./pages"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WIPPage />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/asesoramiento" element={<WIPPage />} />
                <Route path="/capacitaciones" element={<WIPPage />} />
                <Route path="/institucional" element={<WIPPage />} />
                <Route path="/participa" element={<WIPPage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="Landing" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
