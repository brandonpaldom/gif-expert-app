import 'whatwg-fetch'

export async function fetchGifs(gifCategory) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=5M6SB9qzgquvIlKXvKubJK9DjwDlxIEI&q=${gifCategory}&limit=8`

  const res = await fetch(url)
  const { data } = await res.json()

  const gifs = data.map((img) => ({
    gifId: img.id,
    gifTitle: img.title,
    gifUrl: img.images.downsized.url,
  }))

  return gifs
}
