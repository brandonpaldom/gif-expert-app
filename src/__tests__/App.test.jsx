import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App', () => {
  test('Renders header', () => {
    render(<App />)
    expect(screen.getAllByRole('banner')).toHaveLength(1)
  })

  test('Renders add new category input', () => {
    render(<App />)
    expect(screen.getAllByRole('textbox')).toHaveLength(1)
  })

  test('Renders gif grid with initial category', async () => {
    render(<App />)
    expect(await screen.findAllByRole('listitem')).toHaveLength(8)
  })

  test('Renders footer', () => {
    render(<App />)
    expect(screen.getAllByRole('contentinfo')).toHaveLength(1)
  })
})
