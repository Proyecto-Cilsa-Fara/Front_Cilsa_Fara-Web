import { useState } from 'react'
import MetaGallery from "../data/meta-gallery.json"

const INITIAL_COUNT = 12
const BATCH_SIZE = 12

export const useGallery = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT)

  const photos = MetaGallery.slice(0, visibleCount)
  const hasMore = visibleCount < MetaGallery.length

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + BATCH_SIZE, MetaGallery.length))
  }

  return {
    photos,
    hasMore,
    loadMore
  }
}