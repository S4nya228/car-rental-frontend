import React from 'react'
import './index.scss'

function CarsCategories() {
	return (
		<div className="cars-categories">
			<div className="container">
				<div className="cars-categories__wrapper">
					<div className="cars-categories__title">
						<span>Наші автомобілі</span>
					</div>
					<div className="cars-categories__list">
						<a className="cars-categories__list-item">
							<img
								className="cars-categories__item-img"
								src="/src/assets/car-icon-business.png"
								alt="car-icon-business"
							/>
							<span className="cars-categories__item-name">Бізнес</span>
						</a>
						<a className="cars-categories__list-item">
							<img
								className="cars-categories__item-img"
								src="/src/assets/car-icon-premium.png"
								alt="car-icon-premium"
							/>
							<span className="cars-categories__item-name">Преміум</span>
						</a>
						<a className="cars-categories__list-item">
							<img
								className="cars-categories__item-img"
								src="/src/assets/car-icon-off-roaders.png"
								alt="car-icon-off-roaders"
							/>
							<span className="cars-categories__item-name">Позашляховики</span>
						</a>
						<a className="cars-categories__list-item">
							<img
								className="cars-categories__item-img"
								src="/src/assets/car-icon-coupe.png"
								alt="car-icon-coupe"
							/>
							<span className="cars-categories__item-name">Купе</span>
						</a>
						<a className="cars-categories__list-item">
							<img
								className="cars-categories__item-img"
								src="/src/assets/car-icon-cabriolet.png"
								alt="car-icon-cabriolet"
							/>
							<span className="cars-categories__item-name">Кабріолети</span>
						</a>
						<a className="cars-categories__list-item">
							<img
								className="cars-categories__item-img"
								src="/src/assets/car-icon-sportcar.png"
								alt="car-icon-sportcar"
							/>
							<span className="cars-categories__item-name">Спорткари</span>
						</a>
						<a className="cars-categories__list-item">
							<img
								className="cars-categories__item-img"
								src="/src/assets/car-icon-minivan.png"
								alt="car-icon-minivan"
							/>
							<span className="cars-categories__item-name">Мінівени</span>
						</a>
						<a className="cars-categories__list-item">
							<img
								className="cars-categories__item-img"
								src="/src/assets/car-icon-electrocar.png"
								alt="car-icon-electrocar"
							/>
							<span className="cars-categories__item-name">Електрокари</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarsCategories
