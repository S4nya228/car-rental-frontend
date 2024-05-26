import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'

function Cars({ cars }) {
	return (
		<div className="cars">
			<div className="cars__wrapper">
				{cars.map((car) => (
					<Link key={car.id} to={`/car-fleet/${car.id}`} className="cars__item">
						<div className="cars__item-images">
							<img
								src={`${import.meta.env.VITE_API_BASE_URL}/getImage/${
									car.image_path[0]
								}`}
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
