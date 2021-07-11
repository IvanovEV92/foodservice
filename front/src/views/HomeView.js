import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactOperations, contactSelectors } from '../redux/contact';

export default function HomeView() {
	const dispatch = useDispatch();

	const contacts = useSelector(contactSelectors.getContacts);
	// const delContact = useCallback(
	// 	id => {
	// 		dispatch(contactOperations.deleteContact(id));
	// 	},
	// 	[dispatch],
	// );

	useEffect(() => {
		dispatch(contactOperations.fetchContact());
	}, [dispatch]);
	return (
		<ul>
			{contacts.map(item => (
				<li key={item.productid}>
					<img src={item.url} width="200" />
					<p>{item.productname}</p>
					<button onClick={() => null}>X</button>
				</li>
			))}
		</ul>
	);
}
