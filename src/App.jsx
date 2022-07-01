import { useState } from 'react';
import styles from './App.module.css';
import { Navbar, AddCategory, GifGrid, Footer } from './components';

function App() {
  const [categories, setCategories] = useState(['Dogs']);

  const addCategory = (newCategory) => {
    if (
      categories.some(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <AddCategory onNewCategory={addCategory} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
