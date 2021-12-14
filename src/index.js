import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './views/App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/store';
import Loading from './components/common/Loading';
import './assets/scss/bootstrap.scss';

ReactDOM.render(
	<>
		<Suspense fallback={<Loading  className='vh-90 vw-100 center'/>}>
			<Provider store={store}>
				<Router>
					<App />
				</Router>
			</Provider>
		</Suspense>
	</>,
	document.getElementById('root'),
);
