import { fetchGifs } from '../../helpers/fetchGifs'

describe('fetchGifs', () => {
  test('should return an array of gifs', async () => {
    const gifs = await fetchGifs('Pikachu')
    expect(gifs.length).toBeGreaterThan(0)
    expect(gifs[0]).toEqual({
      gifId: expect.any(String),
      gifTitle: expect.any(String),
      gifUrl: expect.any(String),
    })
  })
})
