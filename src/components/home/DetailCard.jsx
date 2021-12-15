import React from 'react'
import { useSelector } from 'react-redux';
import Loading from "../../components/common/Loading";
import { joinWithDash } from '../../utils/common';

const DetailCard = () => {
	const { currentPlayer, loading } = useSelector((state) => state.selectPlayer);

    return (
			<div>
				<section className='details-card me-md-7 w-lg-xl w-xl-xl2 w-100 h-sm  mb-lg-0 mb-5 p-5 pb-3'>
					{loading ? (
						<Loading className='center mt-8' />
					) : currentPlayer ? (
						<div>
							<div className='d-flex'>
								<div>
									<img
										src='/assets/imgs/user.png'
										alt=''
										className='w-50px h-50px rounded-cirlce'
									/>
								</div>
								<div className='mt-1 ms-4'>
									<h4 className='fs-20 bold'>{currentPlayer?.real_name}</h4>
									<p className='text-white text-opacity-75'>
										@{joinWithDash(currentPlayer?.player_name)}
									</p>
								</div>
							</div>
							<div className='mt-5'>
								<h4 className='fs-2- bold'>Assets</h4>
								<p className='fs-14 text-white text-opacity-75'>{currentPlayer?.asset}</p>
							</div>
						</div>
					) : (
						<p class='center align-items-center fs-18 h-170px mb-0'>Please select Any player</p>
					)}
				</section>
			</div>
		);
}

export default DetailCard
