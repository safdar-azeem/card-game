import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
	const [data, setData] = useState(null);
	const [isloading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		setData(null);
		setError(null);
		axios
			.get(url)
			.then((res) => res.data)
			.then((result) => {
				setLoading(false);
				setError(null);
				setData(result);
			})
			.catch((err) => {
				setLoading(false);
				setData(null);
				setError('An error occurred. Awkward..');
			});
	}, [url]);

	const doFetch = (url) => {
		setLoading(true);
		setData(null);
		setError(null);
		axios
			.get(url)
			.then((res) => res.data)
			.then((result) => {
				setLoading(false);
				setError(null);
				setData(result);
			})
			.catch((err) => {
				setLoading(false);
				setData(null);
				setError('An error occurred. Awkward..');
			});
	};

	return { data, isloading, error, doFetch };
}
export default useFetch;
