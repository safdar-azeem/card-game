import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPlayers } from '../../store/actions/';
import Loading from '../common/Loading';
import PlayerCard from './PlayerCard';

const OverView = () => {
	const dispatch = useDispatch();
	const { players, loading } = useSelector((state) => state.players);

	useEffect(() => {
		dispatch(fetchAllPlayers());
	}, []);

	return (
		<div>
			<h1 className='bold ms-2 mb-md-6'>OverView</h1>
			{loading ? (
				<Loading className="center my-9" />
			) : (
				<section className='row row-cols-lg-3 row-cols-md-2 gy-3  row-cols-1'>
					{players.map((player) => {
						return <PlayerCard player={player} key={player.id} />;
					})}
				</section>
			)}
		</div>
	);
};

export default OverView;
