import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	productActions,
	productOperations,
	productSelectors,
} from '../redux/product';

import Header from '../component/Header';
import Modal from '../component/Modal';
import ModalForm from '../component/ModalForm/';
import EditProductForm from '../component/EditProductForm/';
import ProductCard from '../component/ProductCard/';

export default function HomeView() {
	const dispatch = useDispatch();

	const products = useSelector(productSelectors.getProducts);
	const changeProductId = useSelector(productSelectors.getChangeProductId);
	const isModalShow = useSelector(productSelectors.getShowModal);

	useEffect(() => {
		dispatch(productOperations.fetchProducts());
	}, [dispatch]);

	return (
		<main>
			<Header />
			{isModalShow && (
				<Modal>
					<ModalForm />
				</Modal>
			)}
			<ul>
				{products.map(item => (
					<li key={item.id}>
						<img src={item.product_image} width="200" alt={item.product_name} />
						{changeProductId === item.id ? (
							<EditProductForm item={item} />
						) : (
							<ProductCard item={item} />
						)}
					</li>
				))}
			</ul>
		</main>
	);
}
