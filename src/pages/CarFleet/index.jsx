import React, { useEffect, useState } from 'react'
import './index.scss'
import CarsCategories from '../../components/CarsCategories'
import Breadcrumb from '../../components/Breadcrumb'
import Filter from '../../components/Filter'
import Cars from '../../components/Cars'
import axiosInstance from '../../api/axiosInstance'

function CarFleet() {
	const [cars, setCars] = useState([])

	const fetchCars = async () => {
		try {
			const response = await axiosInstance.get('/cars')
			const data = response.data.data
			setCars(data)
		} catch (error) {
			console.error('Error fetching cars:', error)
		}
	}

	useEffect(() => {
		fetchCars()
	}, [])

	console.log(cars)
	return (
		<div className="cars-fleet">
			<Breadcrumb />
			<CarsCategories />
			<Filter cars={cars} />
			<Cars cars={cars} />
		</div>
	)
}

export default CarFleet
