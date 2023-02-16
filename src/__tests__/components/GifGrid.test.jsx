import { render, screen } from '@testing-library/react'
import { GifGrid } from '../../components'
import { useFetchGifs } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('GifGrid', () => {
  const category = 'Pikachu'

  test('Debe de mostrar el componente de loading', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    })
    render(<GifGrid gifCategory={category} />)
    expect(screen.getAllByRole('loader')).toHaveLength(8)
  })

  test('Debe de mostrar los items cuando se cargan las imágenes', () => {
    const gifs = [
      {
        gifId: 'ABC',
        gifUrl: 'https://localhost/imagen.jpg',
        gifTitle: 'Imagen',
      },
      {
        gifId: '123',
        gifUrl: 'https://localhost/imagen.jpg',
        gifTitle: 'Imagen',
      },
    ]
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    })
    render(<GifGrid gifCategory={category} />)
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })
})
