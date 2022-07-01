import styles from '../styles/GifItem.module.css';

export function GifItem({ url }) {
  return <img src={url} alt="" className={styles.image} />;
}
