import React, { useEffect, useState } from 'react'
import './index.scss'
import Breadcrumb from '../../components/Breadcrumb'
import CarViewSwiper from '../../components/CarViewSwiper'
import CarInfo from '../../components/CarInfo'
import BookCar from '../../components/BookCar'

function Car() {
	const [carData, setCarData] = useState(null)

	useEffect(() => {
		async function fetchCarData() {
			try {
				const response = await fetch('/cars/${carData.id}')
				const data = await response.json()
				setCarData(data)
			} catch (error) {
				console.error('Error fetching car data:', error)
			}
		}

		fetchCarData()
	}, [])

	if (!carData) {
		return <div>Loading...</div>
	}
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
