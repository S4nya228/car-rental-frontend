import React, { useEffect, useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from 'react-bootstrap-icons'

function ColorFilter({ isOpen, toggleDropdown, cars, filters, setFilters }) {
	const [initialColors, setInitialColors] = useState([])

	const handleCheckboxChange = (e) => {
		const { name, checked } = e.target
		setFilters((prevFilters) => ({
			...prevFilters,
			color: checked
				? [...prevFilters.color, name]
				: prevFilters.color.filter((color) => color !== name),
		}))
		toggleDropdown()
	}

	const handleParagraphClick = (color) => {
		const isChecked = filters.color && filters.color.includes(color)
		setFilters((prevFilters) => ({
			...prevFilters,
			color: isChecked
				? prevFilters.color.filter((c) => c !== color)
				: [...prevFilters.color, color],
		}))
		toggleDropdown()
	}

	useEffect(() => {
		if (initialColors.length === 0 && cars.length > 0) {
			const uniqueColors = [...new Set(cars.map((car) => car.color))]
			setInitialColors(uniqueColors)
		}
	}, [cars, initialColors])

	return (
		<div className="filter-color">
			<div className="filter-color__title" onClick={toggleDropdown}>
				<span>Колір {isOpen ? <CaretUp /> : <CaretDown />}</span>
			</div>
			<div
				className="filter-color__items"
				style={{ display: isOpen ? 'flex' : 'none' }}
			>
				{initialColors.map((color) => (
					<div className="filter-color__item" key={color}>
						<div className="filter-checkbox">
							<input
								type="checkbox"
								id={color}
								name={color}
								onChange={handleCheckboxChange}
								checked={filters.color && filters.color.includes(color)}
							/>
							<label htmlFor={color} className="filter-checkmark"></label>
							<p onClick={() => handleParagraphClick(color)}>{color}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ColorFilter
