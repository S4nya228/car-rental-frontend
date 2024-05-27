import React from 'react'
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
		toggleDropdown()
	}

	const handleParagraphClick = (id) => {
		const isChecked = filters.engineTypes && filters.engineTypes.includes(id)
		setFilters((prevFilters) => ({
			...prevFilters,
			engineTypes: isChecked
				? prevFilters.engineTypes.filter((type) => type !== id)
				: [...prevFilters.engineTypes, id],
		}))
		toggleDropdown()
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
				{staticEngineTypes.map((type) => (
					<div key={type.id} className="filter-power__item">
						<div className="filter-checkbox">
							<input
								type="checkbox"
								id={type.id}
								name={type.label}
								onChange={handleCheckboxChange}
								checked={
									filters.engineTypes && filters.engineTypes.includes(type.id)
								}
							/>
							<label htmlFor={type.id} className="filter-checkmark"></label>
							<p onClick={() => handleParagraphClick(type.id)}>{type.label}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default PowerFilter
