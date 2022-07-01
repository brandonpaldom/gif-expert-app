import styles from '../styles/Loading.module.css';

export function Loading() {
  const loaders = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {loaders.map((loader) => (
          <div key={loader} className={styles.item} />
        ))}
      </div>
    </div>
  );
}
