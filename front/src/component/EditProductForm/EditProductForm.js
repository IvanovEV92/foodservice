import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { productActions, productOperations } from '../../redux/product';

import { ReactComponent as Update } from '../../icons/update.svg';
import { ReactComponent as Delete } from '../../icons/delete.svg';
import { ReactComponent as Close } from '../../icons/close.svg';

import styles from './EditProductForm.module.scss';

export default function EditProductForm(props) {
	const {
		item: { id, product_image, product_name, product_description, price },
	} = props;
	const dispatch = useDispatch();

	const [productImage, setProductImage] = useState(product_image);
	const [productName, setProductName] = useState(product_name);
	const [productDescription, setProductDescription] =
		useState(product_description);
	const [productPrice, setProductPrice] = useState(price);

	const newProduct = {
		productImage,
		productName,
		productDescription,
		productPrice,
	};

	const handleNameChange = useCallback(event => {
		const { name, value } = event.currentTarget;
		switch (name) {
			case 'name':
				return setProductName(value);

			case 'price':
				return setProductPrice(value);

			case 'description':
				return setProductDescription(value);

			case 'image':
				return setProductImage(value);

			default:
				return null;
		}
	}, []);

	const updateProduct = useCallback(
		(id, newProduct) => {
			dispatch(productOperations.updateProduct(id, newProduct));
			dispatch(productActions.closeEditForm());
		},
		[dispatch],
	);

	const removeProduct = useCallback(
		id => {
			dispatch(productOperations.removeProduct(id));
		},
		[dispatch],
	);

	const closeEditForm = useCallback(() => {
		dispatch(productActions.closeEditForm());
	}, [dispatch]);

	return (
		<form className={styles.form}>
			<div>
				<input
					type="text"
					name="image"
					value={productImage}
					className={styles.input}
					placeholder="Image(insert link)"
					onChange={handleNameChange}
				/>
				<input
					type="text"
					name="name"
					value={productName}
					className={styles.input}
					placeholder="Введите имя"
					onChange={handleNameChange}
				/>
				<textarea
					type="text"
					name="description"
					value={productDescription}
					className={styles.description}
					placeholder="Description"
					onChange={handleNameChange}
				/>
				<input
					type="number"
					min="0"
					name="price"
					value={productPrice}
					className={styles.input}
					placeholder="Price"
					onChange={handleNameChange}
				/>
			</div>
			<div className={styles.form__buttons}>
				<button
					className={styles.button__update}
					onClick={() => updateProduct(id, newProduct)}
				>
					<Update />
				</button>
				<button
					className={styles.button__delete}
					onClick={() => removeProduct(id)}
				>
					<Delete />
				</button>
				<button
					className={styles.button__close}
					onClick={() => closeEditForm()}
				>
					<Close />
				</button>
			</div>
		</form>
	);
}
