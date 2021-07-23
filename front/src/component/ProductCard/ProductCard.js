import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { productOperations } from '../../redux/product';

import { ReactComponent as Edit } from '../../icons/edit.svg';

import styles from './ProductCard.module.scss';

export default function EditProductForm(props) {
	const {
		item: { id, product_name, product_description, price },
	} = props;
	const dispatch = useDispatch();

	const editProduct = useCallback(
		id => {
			dispatch(productOperations.fetchProductsById(id));
		},
		[dispatch],
	);
	return (
		<div className={styles.card}>
			<div className={styles.card__info}>
				<p className={styles.card__name}>{product_name}</p>
				<p>{`${price} грн.`}</p>
				<p className={styles.card__description}>{product_description}</p>
			</div>

			<button className={styles.card__button} onClick={() => editProduct(id)}>
				<Edit />
			</button>
		</div>
	);
}
