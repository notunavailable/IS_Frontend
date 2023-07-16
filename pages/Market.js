import Link from 'next/link'
import styles from '../styles/Market.module.css';

export default function Market() {
    const products = [
        {
            id: 1,
            name: 'Product 1',
            price: 10.99
        },
        {
            id: 2,
            name: 'Product 2',
            price: 5.99
        },
        {
            id: 3,
            name: 'Product 3',
            price: 15.99
        },
        {
            id: 4,
            name: 'Product 4',
            price: 10.99
        },
        {
            id: 5,
            name: 'Product 5',
            price: 5.99
        },
        {
            id: 6,
            name: 'Product 6',
            price: 15.99
        },
        {
            id: 1,
            name: 'Product 1',
            price: 10.99
        },
        {
            id: 2,
            name: 'Product 2',
            price: 5.99
        },
        {
            id: 3,
            name: 'Product 3',
            price: 15.99
        },
        {
            id: 4,
            name: 'Product 4',
            price: 10.99
        },
        {
            id: 5,
            name: 'Product 5',
            price: 5.99
        },
        {
            id: 6,
            name: 'Product 6',
            price: 15.99
        }
    ];
	return (
		<div className={styles.container}>
			<h1>Marketplace</h1>
			<div className={styles.productList}>
				{products.map(product => (
					<div key={product.id} className={styles.productCard}>
						<h2>{product.name}</h2>
						<p>${product.price}</p>
						<button className={styles.button}>Buy Now</button>
					</div>
				))}
			</div>
			<Link href="/"><h2 className={styles.backLink}>⟵ Back to Home</h2></Link>
		</div>
	);
}