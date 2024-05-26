import React, { useEffect, useState } from 'react'
import './index.scss'
import CarsCategories from '../../components/CarsCategories'
import Breadcrumb from '../../components/Breadcrumb'
import Filter from '../../components/Filter'
import Cars from '../../components/Cars'
import axiosInstance from '../../api/axiosInstance'
import { useDebounce } from 'use-debounce'

function CarFleet() {
	const [cars, setCars] = useState([])
	const [filters, setFilters] = useState({
		brands: [],
		color: [],
		engineTypes: [],
		minPrice: '',
		maxPrice: '',
	})
	const [debouncedFilters] = useDebounce(filters, 500)

	const fetchCars = async (appliedFilters) => {
		try {
			const params = {
				brand: appliedFilters.brands.join(','),
				color: appliedFilters.color.join(','),
				engine_type: appliedFilters.engineTypes.join(','),
				min_price: appliedFilters.minPrice,
				max_price: appliedFilters.maxPrice,
			}
			const response = await axiosInstance.get('/cars', { params })
			setCars(response.data.data)
		} catch (error) {
			console.error('Error fetching cars:', error)
		}
	}

	useEffect(() => {
		fetchCars(debouncedFilters)
	}, [debouncedFilters])

	return (
		<div className="cars-fleet">
			<Breadcrumb />
			<CarsCategories />
			<Filter cars={cars} filters={filters} setFilters={setFilters} />{' '}
			<Cars cars={cars} />
		</div>
	)
}

export default CarFleet
