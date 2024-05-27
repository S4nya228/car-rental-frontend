import React, { useState } from 'react'
import './index.scss'

function CarsCategories({ onFilterChange }) {
	const [selectedClass, setSelectedClass] = useState(null)

	const classNamesMap = {
		1: 'Бізнес',
		2: 'Кабріолети',
		3: 'Купе',
		4: 'Електрокари',
		5: 'Мінівени',
		6: 'Позашляховики',
		7: 'Преміум',
		8: 'Спорткари',
	}

	const handleClassSelect = (classId) => {
		if (selectedClass === classId) {
			setSelectedClass(null)
			onFilterChange((prevFilters) => ({ ...prevFilters, carClass: '' }))
		} else {
			setSelectedClass(classId)
			onFilterChange((prevFilters) => ({ ...prevFilters, carClass: classId }))
		}
	}

	return (
		<div className="cars-categories">
			<div className="container">
				<div className="cars-categories__wrapper">
					<div className="cars-categories__title">
						<span>Наші автомобілі</span>
					</div>
					<div className="cars-categories__list">
						{Object.keys(classNamesMap).map((key) => (
							<a
								key={key}
								className={`cars-categories__list-item ${
									selectedClass === parseInt(key) ? 'selected' : ''
								}`}
								onClick={() => handleClassSelect(parseInt(key))}
							>
								<img
									className="cars-categories__item-img"
									src={`/src/assets/${classNamesMap[key].toLowerCase()}.png`}
									alt={`car-icon-${classNamesMap[key].toLowerCase()}`}
								/>
								<span
									className={`cars-categories__item-name ${
										selectedClass === parseInt(key) ? 'selected' : ''
									}`}
								>
									{classNamesMap[key]}
								</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CarsCategories
