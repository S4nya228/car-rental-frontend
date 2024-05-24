import React from 'react'
import { useSelector } from 'react-redux'
import './index.scss'

function MyOrder() {
	const userInfo = useSelector((state) => state.auth.userInfo)
	const orders = userInfo && userInfo.orders ? userInfo.orders : []

	return (
		<div className="order">
			<div className="container">
				<div className="order__wrapper">
					{orders.length === 0 ? (
						<div className="order__massage">
							<h2 className="order__empty">Упс! Здається, тут пусто...</h2>
							<p className="order__empty-description">
								Схоже, ви ще не замовляли автомобілі. Час це змінити!
							</p>
						</div>
					) : (
						<>
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
								{orders.map((order) => (
									<div key={order.id} className="order__item">
										<div className="order__item-image">
											<img src={order.image} alt="image" />
										</div>
										<div className="order__item-name">
											<span>{order.car}</span>
										</div>
										<div className="order__item-date">
											<span>{order.date}</span>
										</div>
										<div className="order__item-status">
											<span>{order.status}</span>
										</div>
									</div>
								))}
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default MyOrder
