import { GifItem, Loading } from '../components';
import useFetchGifs from '../hooks/useFetchGifs';
import styles from '../styles/GifGrid.module.css';

export function GifGrid({ category }) {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.container}>
          <h2 className={styles.title}>{category}</h2>
          <div className={styles.grid}>
            {images.map(({ id, url }) => (
              <GifItem key={id} url={url} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
