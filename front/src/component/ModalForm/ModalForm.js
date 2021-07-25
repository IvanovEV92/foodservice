import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { productActions, productOperations } from '../../redux/product';

import styles from './modalForm.module.scss';

export default function Form() {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');

	const isActive = !!name && !!description && !!image;

	const handleNameChange = useCallback(event => {
		const { name, value } = event.currentTarget;
		switch (name) {
			case 'name':
				return setName(value);

			case 'price':
				return setPrice(value);

			case 'description':
				return setDescription(value);

			case 'image':
				return setImage(value);

			default:
				return null;
		}
	}, []);

	const handleSubmit = useCallback(
		event => {
			event.preventDefault();
			const newProduct = { name, image, description, price };
			dispatch(productOperations.addProduct(newProduct));
			resetForm();
			dispatch(productActions.closeFormModal());
		},
		[dispatch, name, image, description, price],
	);

	const toggleModal = useCallback(() => {
		dispatch(productActions.closeFormModal());
	}, [dispatch]);

	function resetForm() {
		setName('');
		setPrice(0);
		setDescription('');
		setImage('');
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<h1 className={styles.form__title}>Add new dish</h1>
			<input
				type="text"
				name="image"
				value={image}
				placeholder="Image(insert link)"
				className={styles.input}
				required
				onChange={handleNameChange}
			/>
			<input
				type="text"
				name="name"
				value={name}
				placeholder="Name"
				className={styles.input}
				required
				onChange={handleNameChange}
			/>
			<textarea
				type="text"
				name="description"
				value={description}
				placeholder="Description"
				className={styles.description}
				required
				onChange={handleNameChange}
			/>
			<input
				type="number"
				min="0"
				name="price"
				value={price}
				placeholder="Price"
				className={styles.input}
				required
				onChange={handleNameChange}
			/>
			<button
				type="submit"
				className={styles.button__add}
				disabled={isActive ? false : true}
			>
				{isActive ? 'Add' : 'Enter fields'}
			</button>
			<button
				onClick={() => toggleModal()}
				type="button"
				className={styles.button__close}
			>
				Close
			</button>
		</form>
	);
}
