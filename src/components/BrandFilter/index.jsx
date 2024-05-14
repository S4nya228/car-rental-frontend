import React, { useState } from 'react'
import './index.scss'
import { CaretDown, CaretUp } from 'react-bootstrap-icons'

function BrandFilter({ isOpen, toggleDropdown }) {
	const [checkedItems, setCheckedItems] = useState({})
	const handleItemClick = (id) => {
		setCheckedItems((prevState) => ({
			...prevState,
			[id]: !prevState[id],
		}))
	}
	return (
		<div className="filter-brand">
			<div className="filter-brand__title" onClick={toggleDropdown}>
				<span>Марка {isOpen ? <CaretUp /> : <CaretDown />}</span>
			</div>
			<div
				className="filter-brand__items"
				style={{ display: isOpen ? 'flex' : 'none' }}
			>
				<div
					className="filter-brand__item"
					onClick={() => handleItemClick('brand1')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="brand1"
							checked={checkedItems['brand1']}
						/>
						<label htmlFor="brand1" className="filter-checkmark"></label>
						<p>Mercedes</p>
					</div>
				</div>
				<div
					className="filter-brand__item"
					onClick={() => handleItemClick('brand2')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="brand2"
							checked={checkedItems['brand2']}
						/>
						<label htmlFor="brand2" className="filter-checkmark"></label>
						<p>BMW</p>
					</div>
				</div>
				<div
					className="filter-brand__item"
					onClick={() => handleItemClick('brand3')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="brand3"
							checked={checkedItems['brand3']}
						/>
						<label htmlFor="brand3" className="filter-checkmark"></label>
						<p>Audi</p>
					</div>
				</div>
				<div
					className="filter-brand__item"
					onClick={() => handleItemClick('brand4')}
				>
					<div className="filter-checkbox">
						<input
							type="checkbox"
							id="brand4"
							checked={checkedItems['brand4']}
						/>
						<label htmlFor="brand4" className="filter-checkmark"></label>
						<p>Lamborgini</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BrandFilter
