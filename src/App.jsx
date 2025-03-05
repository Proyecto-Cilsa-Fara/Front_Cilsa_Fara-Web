import { BrowserRouter, Routes, Route } from "react-router"
import { ErrorPage, WIPPage } from "./pages"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<WIPPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
