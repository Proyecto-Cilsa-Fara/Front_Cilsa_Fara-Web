import { useState } from 'react'
import MetaGallery from "../data/meta-gallery.json"

// Emite las imágenes de la galería como assets reales del build y devuelve
// el mapa ruta-original -> URL hasheada. Sin esto, las rutas "/src/assets/..."
// del JSON solo funcionan en dev y se rompen en build/preview.
const galleryUrls = import.meta.glob('/src/assets/galeria/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

const photos = MetaGallery.map((item) => ({
  ...item,
  src: galleryUrls[item.src] ?? item.src,
}))

const INITIAL_COUNT = 12
const BATCH_SIZE = 12

export const useGallery = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  const visiblePhotos = photos.slice(0, visibleCount)
  const hasMore = visibleCount < photos.length

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + BATCH_SIZE, photos.length))
  }

  return {
    photos: visiblePhotos,
    hasMore,
    loadMore
  }
}
