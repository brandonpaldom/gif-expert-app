import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('useFetchGifs', () => {
  const gifCategory = 'Pikachu'

  test('Debe retornar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs(gifCategory))
    const { images, isLoading } = result.current
    expect(images.length).toBe(0)
    expect(isLoading).toBeTruthy()
  })

  test('Debe retornar un arreglo de imágenes y el estado de carga en false', async () => {
    const { result } = renderHook(() => useFetchGifs(gifCategory))
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      { timeout: 2000 }
    )
    const { images, isLoading } = result.current
    expect(images.length).toBeGreaterThan(0)
    expect(isLoading).toBeFalsy()
  })
})
