import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../../redux/product';
import logo from '../../logo.png';
export default function Header() {
	const dispatch = useDispatch();

	const toggleModal = useCallback(() => {
		dispatch(productActions.showFormModal());
	}, [dispatch]);

	return (
		<header>
			<a href="">
				<img src={logo} width="100" alt={logo} />
				<span>Foodservice</span>
			</a>

			<button type="button" onClick={() => toggleModal()}>
				Add dish
			</button>
		</header>
	);
}
