import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components'

describe('GifItem', () => {
  const title = 'Gif title'
  const url = 'https://media.giphy.com/media/3o7TKsQ8gqVrXQrjWM/giphy.gif'

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem gifTitle={title} gifUrl={url} />)
    expect(container).toMatchSnapshot()
  })

  test('Debe mostrar el título y la imagen', () => {
    render(<GifItem gifTitle={title} gifUrl={url} />)
    const { src, alt } = screen.getByRole('img')
    expect(src).toBe(url)
    expect(alt).toBe(title)
  })

  test('Debe mostrar el título', () => {
    render(<GifItem gifTitle={title} gifUrl={url} />)
    expect(screen.getByText(title)).toBeTruthy()
  })
})
