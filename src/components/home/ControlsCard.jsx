import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortPlayer } from '../../store/actions/';
import Loading from '../common/Loading';

const ControlsCard = () => {
	const [loading, setLoading] = useState(false);
	const [value, setvalue] = useState('');
	const dispatch = useDispatch();

	const handleSort = () => {
		if (value) {
			setLoading(true);
			setTimeout(() => {
				dispatch(sortPlayer(value));
				setLoading(false);
			}, 200);
		}
	};

	return (
		<div>
			<section className='details-card p-5 pb-3 w-lg-lg w-100 h-sm'>
				<h4 className='fs-22 bold'>Controls</h4>
				<div class='dropdown'>
					<button
						class='btn btn-outline-secondary text-white border mt-6 d-flex justify-content-between w-100'
						type='button'
						id='dropdownMenuButton1'
						data-bs-toggle='dropdown'
						aria-expanded='false'
					>
						<span>{value ? value : 'Sorting'}</span>
						<i class='fas fa-caret-down fs-18'></i>
					</button>
					<ul class='dropdown-menu top-5px' aria-labelledby='dropdownMenuButton1'>
						<li onClick={() => setvalue('All')}>
							<p class='dropdown-item'>All</p>
						</li>
						<li onClick={() => setvalue('asc')}>
							<p class='dropdown-item'>Asc</p>
						</li>
						<li onClick={() => setvalue('desc')}>
							<p class='dropdown-item'>Desc</p>
						</li>
					</ul>
				</div>
				<div className='center mt-6'>
					<button className='btn  btn-stylish  w-115px h-42px center' onClick={handleSort}>
						{loading ? <Loading size='sm' /> : <span class='mb-1'>Submit</span>}
					</button>
				</div>
			</section>
		</div>
	);
};

export default ControlsCard;
