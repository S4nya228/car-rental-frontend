import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'

function Cars() {
	const [cars, setCars] = useState([])

	useEffect(() => {
		fetchCars()
	}, [])

	const fetchCars = async () => {
		try {
			const response = await axiosInstance.get('/cars')
			const data = response.data.data
			setCars(data)
		} catch (error) {
			console.error('Error fetching cars:', error)
		}
	}

	const carImage = (car) => {
		return car.image_path &&
			Array.isArray(car.image_path) &&
			car.image_path.length > 0
			? `${axiosInstance.defaults.baseURL}/getImage/${car.image_path[0]}`
			: ''
	}
	return (
		<div className="cars">
			<div className="cars__wrapper">
				{cars.map((car) => (
					<Link to={`/car/${car.id}`} className="cars__item">
						<div className="cars__item-images">
							<img
								src={carImage(car)}
								className="cars-swiper__item-image"
								alt={`Car`}
							/>
						</div>
						<div className="cars__item-description">
							<div className="cars__item-name">
								<span>{car.name}</span>
							</div>
							<div className="cars__item-price">
								від <span>{car.price} ₴</span>
							</div>
							<div className="cars__item-characteristics">
								<div className="cars__item-power">
									<span>{car.engine_power}</span>к.с
								</div>
								<div className="cars__item-liters">
									<span>{car.engine_type.label}</span>
								</div>
								<div className="cars__item-occasion">
									<span>{car.zero_to_full} c</span>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default Cars
