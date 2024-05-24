import React, { useState } from 'react'
import './index.scss'
import Breadcrumb from '../../components/Breadcrumb'
import Form from '../../components/Form'
import SelectCar from '../../components/SelectCar'
import AdditionalInfo from '../../components/AdditionalInfo'

function Booking() {
	const [selectedCar, setSelectedCar] = useState(null)

	const handleCarSelect = (car) => {
		setSelectedCar(car)
	}

	const clearSelectedCar = () => {
		setSelectedCar(null)
	}

	return (
		<div className="booking">
			<div className="container">
				<div className="booking__wrapper">
					<Breadcrumb />
					<div className="booking__form">
						<div className="booking__info">
							<div className="booking__select">
								<SelectCar
									onCarSelect={handleCarSelect}
									selectedCar={selectedCar}
								/>
							</div>
							<div className="booking__subtitle">
								<span>
									Ми зв'яжемося з Вами протягом години для уточнення деталей.
									Або забронюйте автомобіль за номером: <br /> +38 (099)
									657-71-01
								</span>
							</div>
							<div className="booking__policy">
								<span>
									Натискаючи кнопку "Підтвердити бронь" Ви погоджуєтеся з
									умовами обробки даних
								</span>
							</div>
						</div>
						<div className="booking__input">
							<Form
								selectedCar={selectedCar}
								clearSelectedCar={clearSelectedCar}
							/>
						</div>
					</div>
					<AdditionalInfo />
				</div>
			</div>
		</div>
	)
}

export default Booking
