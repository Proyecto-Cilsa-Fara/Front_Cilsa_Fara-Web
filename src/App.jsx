import { BrowserRouter, Routes, Route } from "react-router"
import {
    ErrorPage,
    LandingPage,
    WIPPage,
    LoginPage,
    InstitucionalPage,
    SociosPage,
    CapacitacionesPage,
    AsesoramientoPage,
    DonarPage,
    ParticipaPage,
} from "./pages"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/asesoramiento" element={<AsesoramientoPage />} />
                <Route path="/capacitaciones" element={<CapacitacionesPage />} />
                <Route path="/institucional" element={<InstitucionalPage />} />
                <Route path="/donar" element={<DonarPage />} />
                <Route path="/participa" element={<ParticipaPage />} />
                <Route path="/recuperar-contraseña" element={<WIPPage />} />
                <Route path="/contacto-administrador" element={<WIPPage />} />
                <Route path="/socios" element={<SociosPage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="Landing" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
