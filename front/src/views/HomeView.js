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

	const [productName, setProductName] = useState('');

	const toggleModal = useCallback(() => {
		dispatch(productActions.showFormModal());
	}, [dispatch]);

	const handleNameChange = useCallback(event => {
		const { name, value } = event.currentTarget;
		switch (name) {
			case 'name':
				return setProductName(value);

			default:
				return null;
		}
	}, []);

	const editProduct = useCallback(
		id => {
			dispatch(productOperations.fetchProductsById(id));
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
								name="name"
								value={productName}
								placeholder="Введите имя"
								onChange={handleNameChange}
							/>
						)}

						<p>{item.product_name}</p>
						{changeProductId === item.id ? (
							<div>
								<button onClick={() => null}>Update</button>
								<button onClick={() => null}>Delete</button>
							</div>
						) : (
							<button onClick={() => editProduct(item.id)}>Edit</button>
						)}
					</li>
				))}
			</ul>
		</>
	);
}
