import React, { useState } from 'react'
import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'
import { useDispatch } from 'react-redux'
import { setTokens } from '../../store/authSlice'
import { ToastContainer, toast } from 'react-toastify'

function Login() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async (e) => {
		e.preventDefault()

		try {
			const response = await axiosInstance.post('/login', {
				email: email,
				password: password,
			})

			const { token, refreshToken } = response.data
			if (!token || !refreshToken) {
				throw new Error('Невірні дані для входу')
			}

			dispatch(setTokens({ token: token, refreshToken: refreshToken }))
			navigate('/')
		} catch (error) {
			let errorMessage = 'Щось пішло не так, спробуйте ще раз.'
			if (error.response?.status === 401) {
				errorMessage = 'Невірні дані для входу'
			} else if (error.response?.data?.errors) {
				const firstErrorKey = Object.keys(error.response.data.errors)[0]
				errorMessage = error.response.data.errors[firstErrorKey][0]
			} else if (error.response?.data?.message) {
				errorMessage = error.response.data.message
			} else if (error.message) {
				errorMessage = error.message
			}
			toast.error(errorMessage)
		}
	}

	const handleBack = () => {
		navigate('/')
	}
	return (
		<div className="login">
			<div className="login__container">
				<button className="login__close-button" onClick={handleBack}>
					&times;
				</button>
				<div className="login__name">Вхід</div>
				<div className="login__description">
					<span>
						Продовжуючи, ви погоджуєтеся з нашою{' '}
						<a href="#">Угодою користувача</a> і підтверджуєте, що розумієте{' '}
						<a href="#">Політику конфіденційності</a>.
					</span>
				</div>
				<form className="login__form" onSubmit={handleLogin}>
					<div className="login__inputs">
						<div className="login__email">
							<div className="login__input-container">
								<input
									type="text"
									name="email"
									id="email-label"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
								<label htmlFor="email-label">Пошта</label>
							</div>
						</div>
						<div className="login__password">
							<div className="login__input-container">
								<input
									type="password"
									name="password"
									value={password}
									id="password-label"
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
								<label htmlFor="password-label">Пароль</label>
							</div>
						</div>
					</div>
					<div className="login__etc">
						<div className="login__member">
							<span>
								Немає акаунту? <Link to="/register">Зареєструватися</Link>
							</span>
						</div>
					</div>
					<div className="login__button"></div>
					<button className="login__button-login">Увійти</button>
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

export default Login
