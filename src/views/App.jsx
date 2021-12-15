import React from 'react'
import { Route, Switch } from 'react-router-dom';
import {Routes} from '../routes'

const App = () => {
    return (
			<div className='pt-7'>
				<header className='text-center'>
					<h1 className='fs-39 bold'>CARD GAME</h1>
				</header>
				<Switch>
					{Routes.map((route, idx) => (
						<Route
							key={idx}
							exact={route.exact}
							path={route.path}
							component={route.component}
						/>
					))}
				</Switch>
			</div>
		);
}

export default App
