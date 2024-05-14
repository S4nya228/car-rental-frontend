import React from 'react'
import './index.scss'

function Form() {
	const minDateValue = new Date().toISOString().split('T')[0]
	return (
		<div className="form">
			<div className="form__wrapper">
				<div className="form__inputs">
					<input
						type="number"
						className="form__input"
						placeholder="+38 (099) 123-45-78"
					/>
					<input
						type="date"
						min={minDateValue}
						max="2030-01-01"
						id="datePicker"
						className="form__input"
					/>
					<input
						type="number"
						className="form__input"
						placeholder="Термін аренди"
					/>
					<input
						type="text"
						className="form__input"
						placeholder="Куди доставити автомобіль?"
					/>
				</div>
				<div className="form__atction">
					<button className="form__confirm">Підтвердити бронь</button>
				</div>
			</div>
		</div>
	)
}

export default Form
