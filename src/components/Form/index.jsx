import React, { useState } from 'react'
import './index.scss'
import axiosInstance from '../../api/axiosInstance'
import { useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'

function Form({ carId }) {
	const token = useSelector((state) => state.auth.token)
	const [phoneNumber, setPhoneNumber] = useState('')
	const [bookingDate, setBookingDate] = useState('')
	const [leaseTerm, setLeaseTerm] = useState('')
	const [destination, setDestination] = useState('')
	const minDateValue = new Date().toISOString().split('T')[0]

	const resetFormFields = () => {
		setPhoneNumber('')
		setBookingDate('')
		setLeaseTerm('')
		setDestination('')
	}

	const handleSubmit = async () => {
		const bookingData = {
			car_id: carId,
			phone_number: phoneNumber,
			booking_date: bookingDate,
			lease_term: leaseTerm,
			destination: destination,
		}

		try {
			const response = await axiosInstance.post('/booking', bookingData, {
				headers: { Authorization: `Bearer ${token}` },
			})
			toast.success('Бронювання підтверджено')
			resetFormFields()
		} catch (error) {
			console.error('Error:', error.response)
			toast.error('Помилка при бронюванні')
		}
	}

	return (
		<div className="form">
			<div className="form__wrapper">
				<form onSubmit={handleSubmit} className="form__form">
					<div className="form__form-inputs">
						<input
							type="text"
							className="form__input"
							placeholder="+38 (099) 123-45-78"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							required
						/>
						<input
							type="date"
							min={minDateValue}
							max="2030-01-01"
							id="datePicker"
							className="form__input"
							value={bookingDate}
							onChange={(e) => setBookingDate(e.target.value)}
							required
						/>
						<input
							type="number"
							className="form__input"
							placeholder="Термін аренди"
							value={leaseTerm}
							onChange={(e) => setLeaseTerm(e.target.value)}
							required
						/>
						<input
							type="text"
							className="form__input"
							placeholder="Куди доставити автомобіль?"
							value={destination}
							onChange={(e) => setDestination(e.target.value)}
							required
						/>
					</div>

					<div className="form__action">
						<button className="form__confirm">Підтвердити бронь</button>
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

export default Form
