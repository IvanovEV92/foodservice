import { createPortal } from 'react-dom';
import './Modal.css';
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { productActions } from '../../redux/product/';

const modalRoot = document.querySelector('#modal-root');

export default function Modal(props) {
	const dispatch = useDispatch();

	useEffect(() => {
		const handleKeyDown = e => {
			if (e.code === 'Escape') {
				dispatch(productActions.closeFormModal());
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [dispatch]);

	const handleBackdropClick = useCallback(
		event => {
			if (event.currentTarget === event.target) {
				dispatch(productActions.closeFormModal());
			}
		},
		[dispatch],
	);

	return createPortal(
		<div className="Modal__backdrop" onClick={e => handleBackdropClick(e)}>
			<div className="Modal__content">{props.children}</div>
		</div>,
		modalRoot,
	);
}
