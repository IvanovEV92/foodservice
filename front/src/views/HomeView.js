import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productOperations, productSelectors } from '../redux/product';

import Header from '../component/Header';
import Modal from '../component/Modal';
import ModalForm from '../component/ModalForm/';
import ProductList from '../component/ProductList/';

import Loader from '../component/Loader/';

export default function HomeView() {
	const dispatch = useDispatch();

	const isModalShow = useSelector(productSelectors.getShowModal);
	const isLoading = useSelector(productSelectors.getLoading);

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
			{/* <Modal>
				<ModalForm />
			</Modal> */}
			{isLoading ? <Loader /> : <ProductList />}
		</main>
	);
}
