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
            document.title = "ONG Nombre"
            meta.setAttribute("content", "")
        }
    }, [title, description])
}
