import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import './index.scss'
import axiosInstance from '../../api/axiosInstance'

function SelectCar({ onCarSelect, selectedCar }) {
	const [cars, setCars] = useState([])
	const [selectedOption, setSelectedOption] = useState(null)

	useEffect(() => {
		const fetchCars = async () => {
			try {
				const response = await axiosInstance.get('/cars')
				setCars(response.data.data)
			} catch (error) {
				console.error('Error fetching cars:', error)
			}
		}

		fetchCars()
	}, [])

	useEffect(() => {
		if (selectedCar) {
			const option = generateGroupOption(selectedCar)
			setSelectedOption(option)
		} else {
			setSelectedOption(null)
		}
	}, [selectedCar])

	const carImage = (car) => {
		return car.image_path &&
			Array.isArray(car.image_path) &&
			car.image_path.length > 0
			? `${axiosInstance.defaults.baseURL}/getImage/${car.image_path[0]}`
			: ''
	}

	const generateGroupOption = (car) => ({
		value: car.id,
		label: (
			<div className="react-select__car">
				<img src={carImage(car)} alt={car.name} />
				<div className="react-select__info-box">
					<span className="react-select__name-car">{car.name}</span>
				</div>
			</div>
		),
		car: car,
	})

	const options = cars.map((car) => generateGroupOption(car))

	const handleChange = (selectedOption) => {
		setSelectedOption(selectedOption)
		onCarSelect(selectedOption ? selectedOption.car : null)
	}

	const customStyles = {
		control: (provided) => ({
			...provided,
			backgroundColor: '#090909',
			color: '#fff',
			border: '1px solid #fff',
		}),
		menu: (provided) => ({
			...provided,
			backgroundColor: '#090909',
			color: '#fff',
		}),
		option: (provided, state) => ({
			...provided,
			backgroundColor: state.isFocused ? '#1b1b1c' : '#090909',
			color: '#fff',
			'&:hover': {
				backgroundColor: '#1b1b1c',
			},
		}),
		placeholder: (provided) => ({
			...provided,
			color: '#fff',
		}),
		singleValue: (provided) => ({
			...provided,
			color: '#fff',
		}),
	}

	return (
		<Select
			name="car"
			options={options}
			isClearable
			noOptionsMessage={() => 'Автомобіль не знайдено'}
			placeholder="Оберіть автомобіль"
			className="react-select-container"
			classNamePrefix="react-select"
			styles={customStyles}
			value={selectedOption}
			onChange={handleChange}
		/>
	)
}

export default SelectCar
