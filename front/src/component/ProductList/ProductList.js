import { useSelector } from 'react-redux';
import { productSelectors } from '../../redux/product';

import EditProductForm from '../EditProductForm';
import ProductCard from '../ProductCard/';

import styles from './ProductList.module.scss';

export default function ProductList() {
	const products = useSelector(productSelectors.getProducts);
	const changeProductId = useSelector(productSelectors.getChangeProductId);

	return (
		<div>
			<ul className={styles.productList}>
				{products.map(item => (
					<li key={item.id} className={styles.productList__item}>
						<img
							src={item.product_image}
							alt={item.product_name}
							className={styles.productList__image}
						/>
						{changeProductId === item.id ? (
							<EditProductForm item={item} />
						) : (
							<ProductCard item={item} />
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
