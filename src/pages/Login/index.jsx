import React, { useState } from 'react'
import './index.scss'
import { Link, useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axiosInstance'
import { useDispatch } from 'react-redux'
import { setTokens } from '../../store/authSlice'

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
			dispatch(setTokens({ token: token, refreshToken: refreshToken }))
			navigate('/')
		} catch (error) {
			console.log('Error: ', error)
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
				<form onSubmit={handleLogin}>
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
						<div className="login__remember-password">
							<span>
								Забули <a href="#">пароль</a>?
							</span>
						</div>
					</div>
					<button className="login__button-login">Увійти</button>
				</form>
			</div>
		</div>
	)
}

export default Login
