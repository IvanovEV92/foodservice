import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { productActions } from '../../redux/product';
import logo from '../../logo.png';

import styles from './Header.module.scss';

export default function Header() {
	const dispatch = useDispatch();

	const toggleModal = useCallback(() => {
		dispatch(productActions.showFormModal());
	}, [dispatch]);

	return (
		<header className={styles.header}>
			<a href="/" className={styles.header__logo}>
				<img src={logo} width="100" alt={logo} />
				<span className={styles.header__text}>Foodservice</span>
			</a>

			<button
				type="button"
				className={styles.header__button}
				onClick={() => toggleModal()}
			>
				Add dish
			</button>
		</header>
	);
}
