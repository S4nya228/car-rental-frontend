import { useState } from 'react'
import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'
import { useDispatch } from 'react-redux'
import { setTokens } from '../../store/authSlice'
import { ToastContainer, toast } from 'react-toastify'

function Registration() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const handleBack = () => {
		navigate('/')
	}

	const handleRegister = async (e) => {
		e.preventDefault()
		if (password !== confirmPassword) {
			toast.error('Паролі не співпадають')
			return
		}

		try {
			const response = await axiosInstance.post(
				'/register',

				{
					name: name,
					email: email,
					password: password,
					password_confirmation: confirmPassword,
				}
			)

			const { token, refreshToken } = response.data
			dispatch(setTokens({ token: token, refreshToken: refreshToken }))
			navigate('/')
		} catch (error) {
			let errorMessage = 'Щось пішло не так, спробуйте ще раз.'
			if (error.response?.data?.errors) {
				const firstErrorKey = Object.keys(error.response.data.errors)[0]
				errorMessage = error.response.data.errors[firstErrorKey][0]
			} else if (error.response?.data?.message) {
				errorMessage = error.response.data.message
			}
			toast.error(errorMessage)
		}
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

				<form onSubmit={handleRegister} className="registration__inputs">
					<div className="registration__name-for-registration">
						<div className="registration__input-container">
							<input
								autoComplete="off"
								type="text"
								name="name"
								id="name-label"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
							<label htmlFor="name-label">Ім'я</label>
						</div>
					</div>
					<div className="registration__email">
						<div className="registration__input-container">
							<input
								type="email"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								name="email"
								id="email-label"
							/>
							<label htmlFor="email-label">Пошта</label>
						</div>
					</div>
					<div className="registration__password">
						<div className="registration__input-container">
							<input
								type="password"
								name="password"
								id="password-label"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
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
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
								required
							/>
							<label htmlFor="confirm-password-label">
								Підтвердження пароля
							</label>
						</div>
					</div>
					<div className="registration__member-holder">
						<div className="registration__member">
							<span>
								Вже маєте акаунт? <Link to="/login">Увійти</Link>
							</span>
						</div>
						<button className="registration__button-register">
							Зареєструватися
						</button>
					</div>
				</form>
			</div>
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	)
}

export default Registration
