import PhotoSwipeLightbox from "photoswipe/lightbox"
import "photoswipe/style.css"
import { useGallery } from "../hooks/useGallery"
import { useEffect } from "react"

function getImgDescription(src) {
    const match = src.match(/img(\d+)\.webp/)
    return match ? `Imagen ${match[1]} de la galería` : "Imagen de la galería"
}

export function GaleriaImagenes({ photosGallery }) {
    const { photos, hasMore, loadMore } = useGallery(photosGallery)

    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: "#grid-gallery-fara",
            children: "a",
            pswpModule: () => import("photoswipe"),
        })
        lightbox.init()

        return () => {
            lightbox.destroy()
            lightbox = null
        }
    }, [])

    return (
        <div>
            <div
                role="region"
                aria-label="Galería de imágenes"
                className="pswp-gallery mx-auto max-w-6xl columns-1 gap-4 px-8 pt-10 pb-0 md:columns-2 lg:columns-3 xl:columns-4"
                id="grid-gallery-fara"
            >
                {photos.map((img, i) => {
                    const description = getImgDescription(img.src)
                    return (
                        <a
                            href={img.src}
                            key={"grid-gallery-fara" + "-" + i}
                            data-pswp-width={img.width}
                            data-pswp-height={img.height}
                            target="_blank"
                            rel="noreferrer"
                            className="break-inside-avoid overflow-hidden"
                            aria-label={description}
                        >
                            <img
                                className="mb-4 w-full object-cover transition-transform duration-300 hover:scale-105"
                                src={img.src}
                                alt={description}
                                loading="lazy"
                                width={img.width}
                                height={img.height}
                                style={{ aspectRatio: `${img.width} / ${img.height}` }}
                            />
                        </a>
                    )
                })}
            </div>

            {hasMore && (
                <div className="flex justify-center px-10 py-4">
                    <button
                        onClick={loadMore}
                        className="skew-custom bg-fara-blue hover:bg-fara-gold w-48 cursor-pointer place-items-center px-8 py-4 font-bold text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer"
                    >
                        Ver más
                    </button>
                </div>
            )}
        </div>
    )
}
