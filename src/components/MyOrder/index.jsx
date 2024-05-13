import React from 'react'
import './index.scss'

function MyOrder() {
	return (
		<div className="order">
			<div className="container">
				<div className="order__wrapper">
					<div className="order__title">
						<div className="order__title-item">
							<span>Фото</span>
						</div>
						<div className="order__title-item">
							<span>Автомобіль</span>
						</div>
						<div className="order__title-item">
							<span>Дата</span>
						</div>
						<div className="order__title-item">
							<span>Статус</span>
						</div>
					</div>
					<div className="order__items">
						<div className="order__item">
							<div className="order__item-image">
								<img
									src="/src/assets/Swiper/Lamborghini Urus.jpeg"
									alt="image"
								/>
							</div>
							<div className="order__item-name">
								<span>BMW M7 Competition</span>
							</div>
							<div className="order__item-date">
								<span>13-05-2024</span>
							</div>
							<div className="order__item-status">
								<span>Виконано</span>
							</div>
						</div>
						<div className="order__item">
							<div className="order__item-image">
								<img
									src="/src/assets/Swiper/Lamborghini Urus.jpeg"
									alt="image"
								/>
							</div>
							<div className="order__item-name">
								<span>BMW M7 Competition</span>
							</div>
							<div className="order__item-date">
								<span>13-05-2024</span>
							</div>
							<div className="order__item-status">
								<span>Виконано</span>
							</div>
						</div>
						<div className="order__item">
							<div className="order__item-image">
								<img
									src="/src/assets/Swiper/Lamborghini Urus.jpeg"
									alt="image"
								/>
							</div>
							<div className="order__item-name">
								<span>BMW M7 Competition</span>
							</div>
							<div className="order__item-date">
								<span>13-05-2024</span>
							</div>
							<div className="order__item-status">
								<span>Виконано</span>
							</div>
						</div>
						<div className="order__item">
							<div className="order__item-image">
								<img
									src="/src/assets/Swiper/Lamborghini Urus.jpeg"
									alt="image"
								/>
							</div>
							<div className="order__item-name">
								<span>BMW M7 Competition</span>
							</div>
							<div className="order__item-date">
								<span>13-05-2024</span>
							</div>
							<div className="order__item-status">
								<span>Виконано</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyOrder
