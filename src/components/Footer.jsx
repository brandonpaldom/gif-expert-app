import styles from '../styles/Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.container}>
      <p>
        Creado por{' '}
        <a
          href="https://brandonpalmeros.me/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          {' '}
          Brandon Palmeros
        </a>{' '}
      </p>
      <p>
        Ver en{' '}
        <a
          href="https://github.com/brandonpaldom/gif-expert-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>
      </p>
    </footer>
  );
}
