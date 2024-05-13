import React from 'react'
import './index.scss'
import { BoxArrowRight } from 'react-bootstrap-icons'

function ProfileLayout() {
	return (
		<div className="profile-layout">
			<div className="container">
				<div className="profile-layout__wrapper">
					<div className="profile-layout__items">
						<div className="profile-layout__item">
							<label htmlFor="">Ім'я</label>
							<input
								type="text"
								placeholder="Ім'я"
								className="profile-layout__item-name"
							/>
						</div>
						<div className="profile-layout__item">
							<label htmlFor="">Пошта</label>
							<input
								type="email"
								placeholder="Пошта"
								className="profile-layout__item-email"
							/>
						</div>
					</div>
					<div className="profile-layout__actions">
						<button className="profile-layout__edit">
							Редагувати інформацію
						</button>
						<button className="profile-layout__exit">
							Вихід <BoxArrowRight />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProfileLayout
