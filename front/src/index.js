import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import Favicon from 'react-favicon';

import favicon from './776480.ico';
import 'modern-normalize/modern-normalize.css';

import { Provider } from 'react-redux';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Favicon url={favicon} />
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
