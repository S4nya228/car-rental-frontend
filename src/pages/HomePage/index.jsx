import React from 'react'
import './index.scss'
import Home from '../../components/Home'
import CarsCategories from '../../components/CarsCategories'
import CarsSwiper from '../../components/CarsSwiper'
import AdditionalInfo from '../../components/AdditionalInfo'

function HomePage() {
	return (
		<div className="home-page">
			<Home />
			<CarsCategories />
			<CarsSwiper />
			<AdditionalInfo />
		</div>
	)
}

export default HomePage
