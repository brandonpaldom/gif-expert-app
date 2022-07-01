import { useCallback, useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export default function useFetchGifs(category) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchGifs = useCallback(async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setLoading(false);
  }, [category]);

  useEffect(() => {
    fetchGifs(category);
  }, [category, fetchGifs]);

  return {
    images,
    loading,
  };
}
