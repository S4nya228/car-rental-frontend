import './index.scss'
import { Link, useNavigate } from 'react-router-dom'

function Registration() {
	const navigate = useNavigate()

	const handleBack = () => {
		navigate('/')
	}
	return (
		<div className="registration">
			<div className="registration__container">
				<button className="registration__close-button" onClick={handleBack}>
					&times;
				</button>
				<div className="registration__name">Реєстрація</div>
				<div className="registration__description">
					<span>
						Продовжуючи, ви погоджуєтеся з нашою{' '}
						<a href="#">Угодою користувача</a> і підтверджуєте, що розумієте{' '}
						<a href="#">Політику конфіденційності</a>.
					</span>
				</div>

				<div className="registration__inputs">
					<div className="registration__name-for-registration">
						<div className="registration__input-container">
							<input
								autoComplete="off"
								type="text"
								name="name"
								id="name-label"
								required
							/>
							<label htmlFor="name-label">Ім'я</label>
						</div>
					</div>
					<div className="registration__email">
						<div className="registration__input-container">
							<input type="text" required name="email" id="email-label" />
							<label htmlFor="email-label">Пошта</label>
						</div>
					</div>
					<div className="registration__password">
						<div className="registration__input-container">
							<input
								type="password"
								name="password"
								id="password-label"
								required
							/>
							<label htmlFor="password-label">Пароль</label>
						</div>
					</div>
					<div className="registration__confirmed-password">
						<div className="registration__input-container">
							<input
								type="password"
								name="confirmPassword"
								id="confirm-password-label"
								required
							/>
							<label htmlFor="confirm-password-label">
								Підтвердження пароля
							</label>
						</div>
					</div>
				</div>

				<div className="registration__member">
					<span>
						Вже маєте акаунт? <Link to="/login">Увійти</Link>
					</span>
				</div>
				<button className="registration__button-register" type="button">
					Register
				</button>
			</div>
		</div>
	)
}

export default Registration
