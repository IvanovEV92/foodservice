import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productOperations, productSelectors } from '../redux/product';

export default function HomeView() {
	const dispatch = useDispatch();

	const products = useSelector(productSelectors.getProducts);
	const changeProductId = useSelector(productSelectors.getChangeProduct);
	console.log(changeProductId);
	const [productName, setProductName] = useState('');

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
	);
}
