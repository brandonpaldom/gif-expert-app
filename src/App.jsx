import { useState } from 'react';
import { AddNewCategory, Footer, GifGrid, Header } from './components';

export default function App() {
  const [categoryList, setCategoryList] = useState(['fortnite']);

  function handleAddNewCategory(newCategory) {
    if (categoryList.includes(newCategory)) return;
    setCategoryList([newCategory, ...categoryList]);
  }

  return (
    <>
      <Header />
      <main className="bg-black">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 xl:px-0">
          <AddNewCategory handleAddNewCategory={handleAddNewCategory} />
          {categoryList.map((category) => (
            <GifGrid key={category} gifCategory={category} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
