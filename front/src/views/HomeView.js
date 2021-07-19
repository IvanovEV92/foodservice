import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	productActions,
	productOperations,
	productSelectors,
} from '../redux/product';
import Modal from '../component/Modal';
import Form from '../component/Form';

export default function HomeView() {
	const dispatch = useDispatch();

	const products = useSelector(productSelectors.getProducts);
	const changeProductId = useSelector(productSelectors.getChangeProductId);
	const isModalShow = useSelector(productSelectors.getShowModal);

	const [productImage, setProductImage] = useState('');
	const [productName, setProductName] = useState('');
	const [productDescription, setProductDescription] = useState('');
	const [productPrice, setProductPrice] = useState('');

	const toggleModal = useCallback(() => {
		dispatch(productActions.showFormModal());
	}, [dispatch]);

	const handleNameChange = event => {
		const { name, value } = event.target;
		switch (name) {
			case 'name':
				return setProductName(value);

			default:
				return null;
		}
	};
	const editProduct = useCallback(
		item => {
			setProductImage(item.product_image);
			setProductName(item.product_name);
			setProductDescription(item.product_description);
			setProductPrice(item.price);
			dispatch(productOperations.fetchProductsById(item.id));
		},
		[dispatch],
	);

	const removeProduct = useCallback(
		id => {
			dispatch(productOperations.removeProduct(id));
		},
		[dispatch],
	);

	useEffect(() => {
		dispatch(productOperations.fetchProducts());
	}, [dispatch]);

	return (
		<>
			<button type="button" onClick={() => toggleModal()}>
				Add dish
			</button>
			{isModalShow && (
				<Modal>
					<Form />
				</Modal>
			)}
			{/* <Modal>
				<Form />
			</Modal> */}
			<ul>
				{products.map(item => (
					<li key={item.id}>
						<img src={item.product_image} width="200" alt={item.product_name} />
						{changeProductId === item.id && (
							<input
								type="text"
								name="image"
								value={productImage}
								placeholder="Image(insert link)"
								onChange={handleNameChange}
							/>
						)}
						<p>{item.product_name}</p>
						{changeProductId === item.id && (
							<input
								type="text"
								name="name"
								value={productName}
								placeholder="Введите имя"
								onChange={handleNameChange}
							/>
						)}
						<p>{item.product_description}</p>
						{changeProductId === item.id && (
							<textarea
								type="text"
								name="description"
								value={productDescription}
								placeholder="Description"
								onChange={handleNameChange}
							/>
						)}
						<p>{item.price}</p>
						{changeProductId === item.id && (
							<input
								type="text"
								name="price"
								value={productPrice}
								placeholder="Price"
								onChange={handleNameChange}
							/>
						)}
						{changeProductId === item.id ? (
							<div>
								<button onClick={() => null}>Update</button>
								<button onClick={() => removeProduct(item.id)}>Delete</button>
							</div>
						) : (
							<button onClick={() => editProduct(item)}>Edit</button>
						)}
					</li>
				))}
			</ul>
		</>
	);
}
