export function GifItem({ gifTitle, gifUrl }) {
  return (
    <div className="flex flex-col gap-2">
      <img src={gifUrl} alt={gifTitle} />
      <p className="text-[0.75rem] text-neutral-600">{gifTitle}</p>
    </div>
  );
}
