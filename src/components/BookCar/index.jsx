import React from 'react'
import './index.scss'
import Form from '../Form'

function BookCar() {
	return (
		<div className="book-car">
			<div className="container">
				<div className="book-car__wrapper">
					<div className="book-car__info">
						<div className="book-car__info-title">
							<span>
								Забронювати автомобіль <br /> BMW 7 Series
							</span>
							<div className="book-car__info-subtitle">
								<span>
									Ми зв'яжемося з Вами протягом години для уточнення деталей.
									Або забронюйте автомобіль за номером: <br /> +38 (099)
									657-71-01
								</span>
							</div>
						</div>

						<div className="book-car__info-policy">
							Натискаючи кнопку "Підтвердити бронь" Ви погоджуєтеся з умовами
							обробки даних
						</div>
					</div>
					<Form />
				</div>
			</div>
		</div>
	)
}

export default BookCar
