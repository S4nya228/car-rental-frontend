import React, { useEffect, useState } from 'react'
import './index.scss'
import { BoxArrowRight } from 'react-bootstrap-icons'
import { useSelector, useDispatch } from 'react-redux'
import axiosInstance from '../../../api/axiosInstance'
import { setUserInfo, clearTokens } from '../../../store/authSlice'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function ProfileLayout() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const userInfo = useSelector((state) => state.auth.userInfo)
	const token = useSelector((state) => state.auth.token)

	const [editMode, setEditMode] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const handleEditClick = () => {
		setEditMode(true)
	}

	useEffect(() => {
		if (userInfo) {
			setName(userInfo.name)
			setEmail(userInfo.email)
		}
	}, [userInfo])

	const handleSaveClick = async () => {
		try {
			const response = await axiosInstance.post(
				`/user/${userInfo.id}`,
				{
					name,
					email,
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			)
			dispatch(setUserInfo(response.data.data))
			setEditMode(false)
			toast.success('Інформація оновлена успішно')
		} catch (error) {
			console.log('Error updating user info:', error)
			toast.error('Помилка при оновленні інформації')
		}
	}

	const handleCancelClick = () => {
		setEditMode(false)
	}

	const handleLogout = async () => {
		try {
			await axiosInstance.post('/logout', null, {
				headers: { Authorization: `Bearer ${token}` },
			})
			dispatch(clearTokens())
			navigate('/')
		} catch (error) {
			console.error('Error logging out:', error)
			toast.error('Помилка при виході')
		}
	}

	return (
		<div className="profile-layout">
			<div className="container">
				<div className="profile-layout__wrapper">
					<div className="profile-layout__items">
						<div className="profile-layout__item">
							<label htmlFor="userName">Ім'я</label>
							<input
								type="text"
								placeholder="Ім'я"
								className="profile-layout__item-name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								readOnly={!editMode}
								required
							/>
						</div>
						<div className="profile-layout__item">
							<label htmlFor="userEmail">Пошта</label>
							<input
								type="email"
								placeholder="Пошта"
								className="profile-layout__item-email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								readOnly={!editMode}
								required
							/>
						</div>
					</div>
					<div className="profile-layout__actions">
						{editMode ? (
							<div className="profile-layout__action">
								<button
									className="profile-layout__save"
									onClick={handleSaveClick}
								>
									Зберегти зміни
								</button>
								<button
									className="profile-layout__cancel"
									onClick={handleCancelClick}
								>
									Відміна
								</button>
							</div>
						) : (
							<button
								className="profile-layout__edit"
								onClick={handleEditClick}
							>
								Редагувати інформацію
							</button>
						)}
						<button className="profile-layout__exit" onClick={handleLogout}>
							Вихід <BoxArrowRight />
						</button>
					</div>
				</div>
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

export default ProfileLayout
