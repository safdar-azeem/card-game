import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPlayer } from '../../store/actions/';
import {joinWithDash} from "../../utils/common";

const PlayerCard = ({ player }) => {
	const dispatch = useDispatch();
	const { currentPlayer, loading } = useSelector((state) => state.selectPlayer);

	return (
		<div className='col p-5'>
			<section
				className={`${
					currentPlayer?.id == player?.id && 'details-card'
				} border cursor gradient-hover h-sm w-100 rounded-4 p-5`}
				onClick={() => dispatch(selectPlayer(player?.id))}
			>
				<div className='d-flex'>
					<div>
						<img src='/assets/imgs/user.png' alt='' className='w-45px h-45px rounded-cirlce' />
					</div>
					<div className='mt-1 ms-4'>
						<h4 className='fs-17 bold mb-7px'>{player?.real_name}</h4>
						<p className='fs-14 text-white text-opacity-60'>
							@{joinWithDash(player.player_name)}
						</p>
					</div>
				</div>
				<div className='mt-5'>
					<h4 className='fs-22 bold'>Assets</h4>
					<p
						className='fs-14 d-inline-block text-truncate text-white text-opacity-60'
						style={{ maxWidth: '180px' }}
					>
						{player?.asset}
					</p>
				</div>
			</section>
		</div>
	);
};

export default PlayerCard;
