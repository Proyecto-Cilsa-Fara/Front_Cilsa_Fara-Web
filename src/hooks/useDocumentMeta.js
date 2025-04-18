import { useEffect } from "react"

export function useDocumentMeta(title, description) {
    useEffect(() => {
        document.title = title

        let meta = document.querySelector('meta[name="description"]')
        if (!meta) {
            meta = document.createElement("meta")
            meta.name = "description"
            document.head.appendChild(meta)
        }
        meta.setAttribute("content", description)

        return () => {
            document.title = "FARA - Fundación Acción Restaurativa Argentina"
            meta.setAttribute(
                "content",
                "FARA Argentina: Trabajamos para reparar el perjuicio causado por conflictos, promoviendo la justicia restaurativa, el bienestar y el desarrollo personal. Capacitaciones, publicaciones y más.",
            )
        }
    }, [title, description])
}
