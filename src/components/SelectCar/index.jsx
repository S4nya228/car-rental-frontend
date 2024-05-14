import React from 'react'
import Select from 'react-select'
import './index.scss'

function SelectCar() {
	const generateGroupOption = () => ({
		value: 'id',
		label: (
			<>
				<div className="react-select__car">
					<img
						src="/src/assets/Swiper/Porsche Panamera Turbo S.jpeg"
						alt="car image"
					/>
					<div className="react-select__info-box">
						<span className="react-select__name-car">BMW D7 Competition</span>
					</div>
				</div>
			</>
		),
	})

	// Додавання статичних опцій до динамічних
	const options = [generateGroupOption()]

	return (
		<Select
			name="car"
			options={options}
			unstyled
			isClearable
			noOptionsMessage={() => 'Car not found'}
			placeholder="Оберіть автомобіль"
			className="react-select-container"
			classNamePrefix="react-select"
		/>
	)
}

export default SelectCar
