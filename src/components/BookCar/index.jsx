import React from 'react'
import './index.scss'

function BookCar() {
	const minDateValue = new Date().toISOString().split('T')[0]

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
					<div className="book-car__form">
						<input
							type="number"
							className="book-car__input"
							placeholder="+38 (099) 123-45-78"
						/>
						<input
							type="date"
							min={minDateValue}
							max="2030-01-01"
							id="datePicker"
							className="book-car__input"
						/>
						<input
							type="number"
							className="book-car__input"
							placeholder="Термін аренди"
						/>
						<input
							type="text"
							className="book-car__input"
							placeholder="Куди доставити автомобіль?"
						/>
						<button className="book-car__confirm">Підтвердити бронь</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BookCar
