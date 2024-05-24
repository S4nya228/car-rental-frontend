import React, { useEffect, useState } from 'react'
import { Navigation, A11y, FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import axiosInstance from '../../api/axiosInstance'

import './index.scss'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import { Link } from 'react-router-dom'

function CarsSwiper() {
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
		<div className="cars-swiper">
			<div className="cars-swiper__title">
				<span>Вибір автомобілів</span>
			</div>
			<Swiper
				modules={[Navigation, A11y, FreeMode]}
				spaceBetween={35}
				navigation
				freeMode={true}
				breakpoints={{
					0: {
						slidesPerView: 1.25,
						spaceBetween: 15,
					},
					768: {
						slidesPerView: 2.25,
						spaceBetween: 15,
					},
					1200: {
						slidesPerView: 3.25,
					},
				}}
			>
				{cars.map((car) => (
					<SwiperSlide key={car.id}>
						<Link to={`/car/${car.id}`} className="cars-swiper__item">
							<div className="cars-swiper__item-images">
								{carImage(car) ? (
									<img
										src={carImage(car)}
										className="cars-swiper__item-image"
										alt={`Car`}
									/>
								) : (
									'Фото відсутнє'
								)}
							</div>
							<div className="cars-swiper__item-description">
								<div className="cars-swiper__item-name">
									<span>{car.name}</span>
								</div>
								<div className="cars-swiper__item-price">
									від <span>{car.price} ₴</span>
								</div>
								<div className="cars-swiper__item-characteristics">
									<div className="cars-swiper__item-power">
										<span>{car.engine_power}</span>к.с
									</div>
									<div className="cars-swiper__item-liters">
										<span>{car.engine_type.label}</span>
									</div>
									<div className="cars-swiper__item-occasion">
										<span>{car.zero_to_full} c</span>
									</div>
								</div>
							</div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

export default CarsSwiper
