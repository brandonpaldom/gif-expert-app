import PropTypes from 'prop-types'

export function GifItem({ gifTitle, gifUrl }) {
  return (
    <li className="flex flex-col gap-2">
      <img src={gifUrl} alt={gifTitle} />
      <p className="text-[0.75rem] text-neutral-600">{gifTitle}</p>
    </li>
  )
}

GifItem.propTypes = {
  gifTitle: PropTypes.string.isRequired,
  gifUrl: PropTypes.string.isRequired,
}
