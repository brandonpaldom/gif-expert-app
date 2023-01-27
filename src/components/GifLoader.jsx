export function GifLoader() {
  const loaders = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="flex flex-col gap-4">
      <div className="h-8 w-2/3 animate-pulse rounded-full bg-neutral-900 md:w-1/4 lg:w-1/3" />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {loaders.map((loader) => (
          <div
            key={loader}
            className="aspect-square animate-pulse bg-neutral-900"
          />
        ))}
      </div>
    </div>
  );
}
