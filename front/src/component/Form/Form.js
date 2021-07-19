import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { productActions, productOperations } from '../../redux/product/';

export default function Form(title = '') {
	const dispatch = useDispatch();
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [description, setDescription] = useState('');
	const [image, setImage] = useState('');

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
		[dispatch, name, price],
	);

	const toggleModal = useCallback(() => {
		dispatch(productActions.closeFormModal());
	}, [dispatch]);

	function resetForm() {
		setName('');
		setPrice('');
		setDescription('');
		setImage('');
	}

	return (
		<form onSubmit={handleSubmit}>
			<h1>Add new dish</h1>
			<input
				type="text"
				name="image"
				value={image}
				placeholder="Image(insert link)"
				onChange={handleNameChange}
			/>
			<input
				type="text"
				name="name"
				value={name}
				placeholder="Name"
				onChange={handleNameChange}
			/>
			<textarea
				type="text"
				name="description"
				value={description}
				placeholder="Description"
				onChange={handleNameChange}
			/>
			<input
				type="text"
				name="price"
				value={price}
				placeholder="Price"
				onChange={handleNameChange}
			/>
			<button onClick={() => toggleModal()} type="button">
				Close
			</button>
			<button type="submit">Add</button>
		</form>
	);
}
