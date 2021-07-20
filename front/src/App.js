import React, { Suspense } from 'react';

import HomeView from './views/HomeView';

export default function App() {
	return (
		<>
			<Suspense fallback={<p>Загружаем...</p>}>
				<HomeView />
			</Suspense>
		</>
	);
}
