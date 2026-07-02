import { useEffect, useState, useRef } from 'react'
import PhotoSwipeLightbox from "photoswipe/lightbox";
import 'photoswipe/style.css';
import { Layout } from "../components/index"
import { useGallery } from "../hooks/useGallery";

function getImgDescription(src) {
  const match = src.match(/img(\d+)\.jpeg$/);
  return match ? `Imagen ${match[1]} de la galería` : 'Imagen de la galería';
}

export function BibliotecaFaraPage() {

  const { photos, hasMore, loadMore } = useGallery();
  const prevCountRef = useRef(12);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#grid-gallery-fara',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  useEffect(() => {
    if (photos.length > prevCountRef.current) {
      const remaining = 99 - photos.length;
      const msg = remaining > 0
        ? `Se cargaron ${photos.length} imágenes. Quedan ${remaining} por ver.`
        : `Se cargaron las 99 imágenes de la galería.`;
      setAnnouncement(msg);
      prevCountRef.current = photos.length;
    }
  }, [photos.length]);

  return (
    <Layout>
      <h2 className='text-3xl font-bold text-center mt-10 mb-4'>Biblioteca FARA imágenes</h2>
      <div
        role="region"
        aria-label="Galería de imágenes"
        className="pswp-gallery max-w-6xl gap-4 mx-auto py-10 px-8 columns-1 md:columns-2 lg:columns-3 xl:columns-4"
        id="grid-gallery-fara"
      >
        {photos.map((img, i) => {
          const description = getImgDescription(img.src);
          return (
            <a
              href={img.src}
              key={"grid-gallery-fara" + '-' + i}
              data-pswp-width={img.width}
              data-pswp-height={img.height}
              target="_blank"
              rel="noreferrer"
              className="overflow-hidden break-inside-avoid"
              aria-label={description}
            >
              <img
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 mb-4"
                src={img.src}
                alt={description}
                loading="lazy"
              />
            </a>
          );
        })}
      </div>

      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </div>

      {hasMore && (
        <div className="flex justify-center p-10">
          <button
            onClick={loadMore}
            className="skew-custom bg-fara-blue hover:bg-fara-gold w-48 place-items-center py-4 px-8 text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer cursor-pointer font-bold"
          >
            Ver más
          </button>
        </div>
      )}
    </Layout>
  )
}
