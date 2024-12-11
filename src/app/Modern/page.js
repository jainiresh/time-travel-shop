
"use client"
import { useEffect, useState } from 'react';
import styles from '../../styles/ModernProducts.module.css';
import Image from 'next/image';

const ModernProducts = [
  {
    id: 1,
    name: 'Smartwatch Pro',
    description: 'An advanced smartwatch with health tracking and 7-day battery life.',
    price: '$399',
    image: '/modern_samsungwatch.webp',
  },
  {
    id: 2,
    name: 'Wireless Earbuds',
    description: 'Crystal-clear sound and noise cancellation.',
    price: '$199',
    image: '/modern_airpods.webp',
  },
  {
    id: 3,
    name: '4K Ultra Monitor',
    description: 'Stunning 4K visuals with a 120Hz refresh rate.',
    price: '$599',
    image: '/modern_monitor.webp',
  },
  {
    id: 11,
    name: 'Smartwatch Pro',
    description: 'An advanced smartwatch with health tracking and 7-day battery life.',
    price: '$399',
    image: '/modern_samsungwatch.webp',
  },
  {
    id: 22,
    name: 'Wireless Earbuds',
    description: 'Crystal-clear sound and noise cancellation.',
    price: '$199',
    image: '/modern_airpods.webp',
  },
  {
    id: 33,
    name: '4K Ultra Monitor',
    description: 'Stunning 4K visuals with a 120Hz refresh rate.',
    price: '$599',
    image: '/modern_monitor.webp',
  },
];

export default function ModernPage() {
  const [environment, setEnvironment] = useState(null);

  useEffect(() => {
    setEnvironment(process.env.NEXT_PUBLIC_OLD_PRODUCTS || 'default');
  }, []);

  // if (environment !== '1') {
  //   return <div className={styles.notice}>Environment is not set to 1.</div>;
  // }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Explore Modern Products</h1>
      </header>
      <main className={styles.main}>
        {ModernProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <Image className={styles.productImage} src={product.image} width={'300'} height={'300'} alt='modernImage'></Image>
            <div className={styles.productDetails}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <span className={styles.price}>{product.price}</span>
            </div>
          </div>
        ))}
      </main>
      <footer className={styles.footer}>
        <p>© 2024 Modern Products Store</p>
      </footer>
    </div>
  );
}
