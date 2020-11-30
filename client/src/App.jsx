import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './BaseRouter';

function App() {
	return (
		<Suspense fallback=''>
			<Router>
				<BaseRouter />
			</Router>
		</Suspense>
	);
}

export default App;
