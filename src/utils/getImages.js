import GeneralGallery from "../data/general-gallery.json"
import SecondGallery from "../data/second-gallery.json"

// Emite las imágenes de la galería como assets reales del build y devuelve
// el mapa ruta-original -> URL hasheada. Sin esto, las rutas "/src/assets/..."
// del JSON solo funcionan en dev y se rompen en build/preview.
const galleryUrls = import.meta.glob("/src/assets/galeria/*.webp", {
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