import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { productActions, productOperations } from '../../redux/product';

export default function EditProductForm(props) {
	const {
		item: { id, product_image, product_name, product_description, price },
	} = props;
	const dispatch = useDispatch();

	const editProduct = useCallback(
		id => {
			dispatch(productOperations.fetchProductsById(id));
		},
		[dispatch],
	);
	return (
		<>
			<p>{product_name}</p>

			<p>{product_description}</p>

			<p>{price}</p>
			<button onClick={() => editProduct(id)}>Edit</button>
		</>
	);
}
