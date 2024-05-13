import React from 'react'
import './index.scss'

import {
	ColumnsGap,
	GraphUp,
	Shuffle,
	CarFront,
	CurrencyExchange,
	PersonHeart,
} from 'react-bootstrap-icons'

function AdditionalInfo() {
	return (
		<div className="additional-info">
			<div className="container">
				<div className="additional-info__wrapper">
					<div className="additional-info__info">
						<div className="additional-info__title">
							<span>Чому жителі Ужгорода вибирають саме нас?</span>
						</div>
						<div className="additional-info__subtitle">
							<span>
								Переконайтеся самі в найвищому рівні роботи з клієнтом.
							</span>
						</div>
					</div>
					<div className="additional-info__items">
						<div className="additional-info__item">
							<span className="additional-info__description">
								Широкий вибір автомобілів різних марок і моделей.
							</span>
							<CarFront className="additional-info__icon" />
						</div>
						<div className="additional-info__item">
							<span className="additional-info__description">
								Наш вебсайт має зрозумілий і простий інтерфейс.
							</span>
							<ColumnsGap className="additional-info__icon" />
						</div>
						<div className="additional-info__item">
							<span className="additional-info__description">
								Вигідні тарифи на оренду автомобілів.
							</span>
							<CurrencyExchange className="additional-info__icon" />
						</div>
						<div className="additional-info__item">
							<span className="additional-info__description">
								Високу якість обслуговування автомобіля.
							</span>
							<GraphUp className="additional-info__icon" />
						</div>
						<div className="additional-info__item">
							<span className="additional-info__description">
								Гнучкі умови оренди
							</span>
							<Shuffle className="additional-info__icon" />
						</div>
						<div className="additional-info__item">
							<span className="additional-info__description">
								Сервіс відомий своєю надійністю та довірою клієнтів.
							</span>
							<PersonHeart className="additional-info__icon" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AdditionalInfo
