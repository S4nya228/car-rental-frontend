import React from 'react'
import './index.scss'

function CarInfo() {
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
							<span>Чорний</span>
						</div>
						<div className="car-info__specs-item">
							<img
								className="car-info__item-icon"
								src="/src/assets/icon-engine.svg"
								alt="icon-engine"
							/>
							<span>Дизель</span>
						</div>
						<div className="car-info__specs-item">
							<img
								className="car-info__item-icon"
								src="/src/assets/icon-power.svg"
								alt="icon-power"
							/>
							<span>900 к/c</span>
						</div>
						<div className="car-info__specs-item">
							<img
								className="car-info__item-icon"
								src="/src/assets/icon-gear.svg"
								alt="icon-gear"
							/>
							<span>Повний</span>
						</div>
						<div className="car-info__specs-item">
							<img
								className="car-info__item-icon"
								src="/src/assets/icon-speed.svg"
								alt="icon-speed"
							/>
							<span>7.2 с</span>
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
									<span>14 000₴</span>
								</div>
							</div>
							<div className="car-info__prices-item">
								<div className="car-info__item-name">
									<span>4-6 днів</span>
								</div>
								<div className="car-info__item-price">
									<span>12 000₴</span>
								</div>
							</div>
							<div className="car-info__prices-item">
								<div className="car-info__item-name">
									<span>7-13 днів</span>
								</div>
								<div className="car-info__item-price">
									<span>10 000₴</span>
								</div>
							</div>
							<div className="car-info__prices-item">
								<div className="car-info__item-name">
									<span>14-29 днів</span>
								</div>
								<div className="car-info__item-price">
									<span>9 000₴</span>
								</div>
							</div>
							<div className="car-info__prices-item">
								<div className="car-info__item-name">
									<span>30+ днів</span>
								</div>
								<div className="car-info__item-price">
									<span>8 000₴</span>
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
