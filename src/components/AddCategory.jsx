import { useState } from 'react';
import styles from '../styles/AddCategory.module.css';

export function AddCategory({ onNewCategory }) {
  const [category, setCategory] = useState('');
  const [isShort, setIsShort] = useState(false);

  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (category.trim().length <= 1) {
      setIsShort(true);
      return;
    }

    onNewCategory(category.trim());
    setCategory('');
    setIsShort(false);
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        onChange={handleChange}
        placeholder="Search all the GIFs"
        type="text"
        value={category}
      />
      {isShort && (
        <p className={styles.error}>
          Category must be at least 2 characters long
        </p>
      )}
    </form>
  );
}
