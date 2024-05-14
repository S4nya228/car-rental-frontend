import React from 'react'
import './index.scss'
import Breadcrumb from '../../components/Breadcrumb'
import Form from '../../components/Form'
import Select from '../../components/SelectCar'
import AdditionalInfo from '../../components/AdditionalInfo'

function Booking() {
	return (
		<div className="booking">
			<div className="container">
				<div className="booking__wrapper">
					<Breadcrumb />
					<div className="booking__form">
						<div className="booking__info">
							<div className="booking__select">
								<Select />
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
							<Form />
						</div>
					</div>
					<AdditionalInfo />
				</div>
			</div>
		</div>
	)
}

export default Booking
