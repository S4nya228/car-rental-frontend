import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'
import Breadcrumb from '../../components/Breadcrumb'
import CarViewSwiper from '../../components/CarViewSwiper'
import CarInfo from '../../components/CarInfo'
import BookCar from '../../components/BookCar'
import axiosInstance from '../../api/axiosInstance'

function Car() {
	const { id } = useParams()
	const [carData, setCarData] = useState(null)

	useEffect(() => {
		async function fetchCarData() {
			try {
				const response = await axiosInstance.get(`/cars/${id}`)
				const data = response.data.data
				setCarData(data)
				console.log(data)
			} catch (error) {
				console.error('Error fetching car data:', error)
			}
		}

		fetchCarData()
	}, [id])

	const carImages =
		carData && carData.image_path && Array.isArray(carData.image_path)
			? carData.image_path.map(
					(image) => `${axiosInstance.defaults.baseURL}/getImage/${image}`
			  )
			: []

	if (!carData) {
		return <div>Ще трохи...</div>
	}

	return (
		<div className="car">
			<div className="car__wrapper">
				<Breadcrumb />
				<div className="car__name">
					<span>{carData.name}</span>
				</div>
				<CarViewSwiper images={carImages} />
				<CarInfo car={carData} />
				<BookCar carId={id} />
			</div>
		</div>
	)
}

export default Car
