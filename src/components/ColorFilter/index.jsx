import React, { useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from 'react-bootstrap-icons'

function ColorFilter({ isOpen, toggleDropdown }) {
	const [checkedItems, setCheckedItems] = useState({})
	const handleItemClick = (id) => {
		setCheckedItems((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}))
	}
	return (
		<div className="filter-color">
			<div className="filter-color__title" onClick={toggleDropdown}>
				<span>Колір {isOpen ? <CaretUp /> : <CaretDown />}</span>
			</div>
			<div
				className="filter-color__items"
				style={{ display: isOpen ? 'flex' : 'none' }}
			>
				<div
					className="filter-color__item"
					onClick={() => handleItemClick('color1')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="color1"
							checked={checkedItems['color1']}
						/>
						<label htmlFor="color1" className="filter-checkmark"></label>
						<p>Синій</p>
					</div>
				</div>
				<div
					className="filter-color__item"
					onClick={() => handleItemClick('color2')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="color2"
							checked={checkedItems['color2']}
						/>
						<label htmlFor="color2" className="filter-checkmark"></label>
						<p>Жовтий</p>
					</div>
				</div>
				<div
					className="filter-color__item"
					onClick={() => handleItemClick('color3')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="color3"
							checked={checkedItems['color3']}
						/>
						<label htmlFor="color3" className="filter-checkmark"></label>
						<p>Червоний</p>
					</div>
				</div>
				<div
					className="filter-color__item"
					onClick={() => handleItemClick('color4')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="color4"
							checked={checkedItems['color4']}
						/>
						<label htmlFor="color4" className="filter-checkmark"></label>
						<p>Чорний</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ColorFilter
