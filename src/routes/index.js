import { lazy } from 'react';
import { HOME } from './Paths';

export const Routes = [
	{
		path: HOME,
		title: 'Home',
		exact: true,
		component: lazy(() => import('../views/pages/Home')),
	},
];