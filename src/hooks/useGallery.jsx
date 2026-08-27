import { useState } from "react"

const INITIAL_COUNT = 14
const BATCH_SIZE = 14

export const useGallery = (photos) => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

    const visiblePhotos = photos.slice(0, visibleCount)
    const hasMore = visibleCount < photos.length

    const loadMore = () => {
        setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, photos.length))
    }

    return {
        photos: visiblePhotos,
        hasMore,
        loadMore,
    }
}
