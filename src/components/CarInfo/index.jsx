import React from 'react'
import './index.scss'

function CarInfo({ car }) {
	const { price } = car

	// Функція для обчислення ціни на основі базової ціни
	const calculatePrice = (basePrice, days) => {
		if (days <= 3) return basePrice
		if (days <= 6) return basePrice * 0.85 // 15% знижка
		if (days <= 13) return basePrice * 0.75 // 25% знижка
		if (days <= 29) return basePrice * 0.65 // 35% знижка
		return basePrice * 0.6 // 40% знижка для більше 30 днів
	}

	return (
		<div className="car-info">
			<div className="container">
				<div className="car-info__title">
					<span>Технічні характеристики</span>
				</div>
				<div className="car-info__wrapper">
					<div className="car-info__specs">
						<div className="car-info__specs-item">
							<img
								className="car-info__item-icon"
								src="/src/assets/icon-color.svg"
								alt="icon-color"
							/>
							<span>{car.color}</span>
						</div>
						<div className="car-info__specs-item">
							<img
								className="car-info__item-icon"
								src="/src/assets/icon-engine.svg"
								alt="icon-engine"
							/>
							<span>{car.engine_type.label}</span>
						</div>
						<div className="car-info__specs-item">
							<img
								className="car-info__item-icon"
								src="/src/assets/icon-power.svg"
								alt="icon-power"
							/>
							<span>{car.engine_power} к/c</span>
						</div>
						<div className="car-info__specs-item">
							<img
								className="car-info__item-icon"
								src="/src/assets/icon-gear.svg"
								alt="icon-gear"
							/>
							<span>{car.wheel_drive.label}</span>
						</div>
						<div className="car-info__specs-item">
							<img
								className="car-info__item-icon"
								src="/src/assets/icon-speed.svg"
								alt="icon-speed"
							/>
							<span>{car.zero_to_full} с</span>
						</div>
					</div>
					<div className="car-info__prices">
						<div className="car-info__prices-title">Ціна аренди (за добу)</div>
						<div className="car-info__prices-items">
							<div className="car-info__prices-item">
								<div className="car-info__item-name">
									<span>1-3 дні</span>
								</div>
								<div className="car-info__item-price">
									<span>{calculatePrice(price, 3).toFixed(0)} ₴</span>
								</div>
							</div>
							<div className="car-info__prices-item">
								<div className="car-info__item-name">
									<span>4-6 днів</span>
								</div>
								<div className="car-info__item-price">
									<span>{calculatePrice(price, 6).toFixed(0)} ₴</span>
								</div>
							</div>
							<div className="car-info__prices-item">
								<div className="car-info__item-name">
									<span>7-13 днів</span>
								</div>
								<div className="car-info__item-price">
									<span>{calculatePrice(price, 13).toFixed(0)} ₴</span>
								</div>
							</div>
							<div className="car-info__prices-item">
								<div className="car-info__item-name">
									<span>14-29 днів</span>
								</div>
								<div className="car-info__item-price">
									<span>{calculatePrice(price, 29).toFixed(0)} ₴</span>
								</div>
							</div>
							<div className="car-info__prices-item">
								<div className="car-info__item-name">
									<span>30+ днів</span>
								</div>
								<div className="car-info__item-price">
									<span>{calculatePrice(price, 30).toFixed(0)} ₴</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarInfo
