"use client"

import { useEffect, useState } from 'react';
import styles from '../../styles/OldProducts.module.css';
import Image from 'next/image';

const OldProducts = [
  { id: 1, name: 'Vintage Clock', description: 'An ornate clock from the 18th century.', price: '$150', image: "/vintage_clock.webp" },
  { id: 2, name: 'Antique Chair', description: 'Handcrafted wooden chair.', price: '$200', image: "/vintage_clock.webp" },
  { id: 3, name: 'Old Lamp', description: 'Classic Victorian lamp.', price: '$75', image: "/vintage_clock.webp" },
  { id: 11, name: 'Vintage Clock', description: 'An ornate clock from the 18th century.', price: '$150', image: "/vintage_clock.webp" },
  { id: 22, name: 'Antique Chair', description: 'Handcrafted wooden chair.', price: '$200', image: "/vintage_clock.webp" },
  { id: 33, name: 'Old Lamp', description: 'Classic Victorian lamp.', price: '$75', image: "/vintage_clock.webp" },
  { id: 21, name: 'Vintage Clock', description: 'An ornate clock from the 18th century.', price: '$150', image: "/vintage_clock.webp" },
  { id: 32, name: 'Antique Chair', description: 'Handcrafted wooden chair.', price: '$200', image: "/vintage_clock.webp" },
  { id: 43, name: 'Old Lamp', description: 'Classic Victorian lamp.', price: '$75', image: "/vintage_clock.webp" },
];

export default function VintagePage() {
  const [environment, setEnvironment] = useState(null);

  useEffect(() => {
    setEnvironment(process.env.NEXT_PUBLIC_OLD_PRODUCTS || 'default');
  }, []);


  return (
    <div className={styles.container}>
      <link
          href="https://fonts.googleapis.com/css2?family=Pixelify+Sans:wght@400..700&display=swap"
          rel="stylesheet"
        />
      <header className={styles.header} style={{display:'flex'}}>
        <h1 style={{width:'95%'}}>Derby's scrap shop</h1>
        <div>Time : 03/02/1883</div>
      </header>
      <main className={styles.main}>
        {OldProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <h2>{product.name}</h2>
            <Image className={styles.imageTint} src={product.image} alt='old products' width={300} height={300}></Image>
            <p>{product.description}</p>
            <span className={styles.price}>{product.price}</span>
          </div>
        ))}
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Old Style Store</p>
      </footer>
    </div>
  );
}
