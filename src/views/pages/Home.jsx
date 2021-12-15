import React from 'react'
import DetailCard from '../../components//home/DetailCard';
import ControlsCard from '../../components//home/ControlsCard';
import OverView from '../../components//home/OverView';

const Home = () => {
	return (
		<div className='container mt-8'>
			<div className='d-flex flex-lg-row w-100 flex-column justify-content-md-between justify-content-center'>
				<DetailCard />
				<ControlsCard/>
			</div>
			<div className='my-8'>
				<OverView/>
			</div>
		</div>
	);
}

export default Home



