import React, { useEffect, useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from 'react-bootstrap-icons'

function PowerFilter({ isOpen, toggleDropdown, filters, setFilters }) {
	const staticEngineTypes = [
		{ id: '0', label: 'Бензин' },
		{ id: '1', label: 'Дизель' },
		{ id: '2', label: 'Електрика' },
		{ id: '3', label: 'Гібрид' },
	]

	const handleCheckboxChange = (e) => {
		const { id, checked } = e.target
		setFilters((prevFilters) => ({
			...prevFilters,
			engineTypes: checked
				? [...prevFilters.engineTypes, id]
				: prevFilters.engineTypes.filter((type) => type !== id),
		}))
	}

	return (
		<div className="filter-power">
			<div className="filter-power__title" onClick={toggleDropdown}>
				<span>Тип двигуна {isOpen ? <CaretUp /> : <CaretDown />}</span>
			</div>
			<div
				className="filter-power__items"
				style={{ display: isOpen ? 'flex' : 'none' }}
			>
				{staticEngineTypes.map((type, index) => (
					<div key={index} className="filter-power__item">
						<div className="filter-checkbox">
							<input
								type="checkbox"
								id={type.id}
								name={type.label}
								onChange={handleCheckboxChange}
								checked={
									filters.brands && filters.engineTypes.includes(type.id)
								}
							/>
							<label htmlFor={type.id} className="filter-checkmark"></label>
							<p>{type.label}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default PowerFilter
