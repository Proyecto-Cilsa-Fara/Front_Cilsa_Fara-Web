import GeneralGallery from "../data/general-gallery.json"
import SecondGallery from "../data/second-gallery.json"
import AgendaGallery from "../data/fara-agenda.json"

// Emite las imágenes de la galería como assets reales del build y devuelve
// el mapa ruta-original -> URL hasheada. Sin esto, las rutas "/src/assets/..."
// del JSON solo funcionan en dev y se rompen en build/preview.
// El `**` es obligatorio: las fotos están en subcarpetas (galeria-general/,
// galeria-mujeres/). Un glob de un solo nivel (`*.webp`) no las captura y las
// rutas crudas del JSON fallan con 404 en build/preview.
const galleryUrls = import.meta.glob("/src/assets/galeria/**/*.webp", {
    eager: true,
    query: "?url",
    import: "default",
})

const agendaUrls = import.meta.glob("/src/assets/agenda/*", {
    eager: true,
    query: "?url",
    import: "default",
})

export const generalPhotos = GeneralGallery.map((item) => ({
    ...item,
    src: galleryUrls[item.src] ?? item.src,
}))

export const mujeresPhotos = SecondGallery.map((item) => ({
    ...item,
    src: galleryUrls[item.src] ?? item.src,
}))

const agendaItems = AgendaGallery.map((item) => ({
    ...item,
    src: agendaUrls[item.src] ?? item.src,
}))

export const agendaPhotos = agendaItems.filter((item) => item.type !== "pdf")
export const agendaPdf = agendaItems.find((item) => item.type === "pdf") ?? null