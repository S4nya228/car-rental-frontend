import React from 'react'
import './index.scss'
import CarsCategories from '../../components/CarsCategories'
import Breadcrumb from '../../components/Breadcrumb'
import Filter from '../../components/Filter'
import Cars from '../../components/Cars'
function CarFleet() {
	return (
		<div className="cars">
			<Breadcrumb />
			<CarsCategories />
			<Filter />
			<Cars />
		</div>
	)
}

export default CarFleet
