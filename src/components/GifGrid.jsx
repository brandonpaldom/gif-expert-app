import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem, GifLoader } from './';

export function GifGrid({ gifCategory }) {
  const { images, isLoading } = useFetchGifs(gifCategory);

  if (isLoading) return <GifLoader />;

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[2rem] font-bold capitalize text-green-400">
        {gifCategory}
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image) => (
          <GifItem key={image.gifId} {...image} />
        ))}
      </div>
    </div>
  );
}
