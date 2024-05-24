import React, { useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from 'react-bootstrap-icons'

function PowerFilter({ isOpen, toggleDropdown }) {
	const [checkedItems, setCheckedItems] = useState({})

	const handleItemClick = (id) => {
		setCheckedItems((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}))
	}
	return (
		<div className="filter-power">
			<div className="filter-power__title" onClick={toggleDropdown}>
				<span>Потужність {isOpen ? <CaretUp /> : <CaretDown />}</span>
			</div>
			<div
				className="filter-power__items"
				style={{ display: isOpen ? 'flex' : 'none' }}
			>
				<div
					className="filter-power__item"
					onClick={() => handleItemClick('power1')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="power1"
							checked={checkedItems['power1']}
						/>
						<label htmlFor="power1" className="filter-checkmark"></label>
						<p>200-300 к/с</p>
					</div>
				</div>
				<div
					className="filter-power__item"
					onClick={() => handleItemClick('power2')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="power2"
							checked={checkedItems['power2']}
						/>
						<label htmlFor="power2" className="filter-checkmark"></label>
						<p>300-400 к/с</p>
					</div>
				</div>
				<div
					className="filter-power__item"
					onClick={() => handleItemClick('power3')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="power3"
							checked={checkedItems['power3']}
						/>
						<label htmlFor="power3" className="filter-checkmark"></label>
						<p>400-500 к/с</p>
					</div>
				</div>
				<div
					className="filter-power__item"
					onClick={() => handleItemClick('power4')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="power4"
							checked={checkedItems['power4']}
						/>
						<label htmlFor="power4" className="filter-checkmark"></label>
						<p>500-600 к/с</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PowerFilter
