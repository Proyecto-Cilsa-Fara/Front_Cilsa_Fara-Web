import { BrowserRouter, Routes, Route } from "react-router"
import { ErrorPage, LandingPage, WIPPage } from "./pages"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WIPPage />} />
                <Route path="*" element={<ErrorPage />} />
                <Route path="Landing" element={<LandingPage />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
