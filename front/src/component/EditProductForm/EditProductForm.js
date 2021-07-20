import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { productActions, productOperations } from '../../redux/product';

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
		<form>
			<input
				type="text"
				name="image"
				value={productImage}
				placeholder="Image(insert link)"
				onChange={handleNameChange}
			/>
			<input
				type="text"
				name="name"
				value={productName}
				placeholder="Введите имя"
				onChange={handleNameChange}
			/>
			<textarea
				type="text"
				name="description"
				value={productDescription}
				placeholder="Description"
				onChange={handleNameChange}
			/>
			<input
				type="number"
				min="0"
				name="price"
				value={productPrice}
				placeholder="Price"
				onChange={handleNameChange}
			/>
			<div>
				<button onClick={() => updateProduct(id, newProduct)}>Update</button>
				<button onClick={() => removeProduct(id)}>Delete</button>
				<button onClick={() => closeEditForm()}>Close</button>
			</div>
		</form>
	);
}
