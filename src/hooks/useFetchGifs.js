import { useCallback, useEffect, useState } from 'react'
import { fetchGifs } from '../helpers/fetchGifs'

export function useFetchGifs(gifCategory) {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchImages = async () => {
    const newImages = await fetchGifs(gifCategory)
    setImages(newImages)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchImages()
  }, [])

  return { images, isLoading }
}
