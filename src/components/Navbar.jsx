import giphyLogo from '../assets/images/giphy-logo.png';
import styles from '../styles/Navbar.module.css';

export function Navbar() {
  return (
    <header className={styles.container}>
      <img src={giphyLogo} alt="" className={styles.logo} />
    </header>
  );
}
