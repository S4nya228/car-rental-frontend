import React from 'react'
import './index.scss'
import Breadcrumb from '../../components/Breadcrumb'
import CarViewSwiper from '../../components/CarViewSwiper'
import CarInfo from '../../components/CarInfo'
import BookCar from '../../components/BookCar'

function Car() {
	return (
		<div className="car">
			<div className="car__wrapper">
				<Breadcrumb />
				<div className="car__name">
					<span>BMW 520D Black</span>
				</div>
				<CarViewSwiper />
				<CarInfo />
				<BookCar />
			</div>
		</div>
	)
}

export default Car
