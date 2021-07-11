import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productOperations, productSelectors } from '../redux/product';

export default function HomeView() {
	const dispatch = useDispatch();

	const products = useSelector(productSelectors.getProducts);
	const changeProduct = useSelector(productSelectors.getChangeProduct);
	console.log(changeProduct.productname);

	const [productName, setProductName] = useState(changeProduct.productname);
	console.log(productName);
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
				<li key={item.productid}>
					<img src={item.url} width="200" alt={item.productname} />
					<input
						type="text"
						name="name"
						value={productName}
						placeholder="Введите имя"
						// pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
						title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
						required
						onChange={handleNameChange}
					/>
					<p>{item.productname}</p>
					<button onClick={() => editProduct(item.productid)}>Edit</button>
				</li>
			))}
		</ul>
	);
}
