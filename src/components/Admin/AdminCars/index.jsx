import React, { useState, useEffect } from 'react'
import axiosInstance from '../../../api/axiosInstance'
import CarsTable from '../CarsTable'
import AddCarForm from '../AddCarForm'
import EditCarForm from '../EditCarForm'
import { ToastContainer, toast } from 'react-toastify'
import './index.scss'

export default function AdminCars() {
	const [openAdd, setOpenAdd] = useState(false)
	const [openEdit, setOpenEdit] = useState(false)
	const [cars, setCars] = useState([])
	const [currentCar, setCurrentCar] = useState(null)
	const [newCar, setNewCar] = useState({
		name: '',
		car_class: '',
		brand: '',
		color: '',
		engine_type: '',
		engine_power: '',
		wheel_drive: '',
		zero_to_full: '',
		price: '',
	})
	const [carPhotos, setCarPhotos] = useState([])

	const fetchCars = async () => {
		try {
			const response = await axiosInstance.get('/admin/cars')
			const data = response.data.data
			setCars(data)
		} catch (error) {
			console.error('Error fetching cars:', error)
		}
	}

	const handleClickOpenAdd = () => {
		setOpenAdd(true)
	}

	const handleCloseAdd = () => {
		setOpenAdd(false)
	}

	const handleClickOpenEdit = (car) => {
		setCurrentCar(car)
		setOpenEdit(true)
	}

	const handleCloseEdit = () => {
		setOpenEdit(false)
	}

	const handleNewCarChange = (event) => {
		const { name, value } = event.target
		setNewCar((prevCar) => ({
			...prevCar,
			[name]: value,
		}))
	}

	const handleCurrentCarChange = (event) => {
		const { name, value } = event.target
		setCurrentCar((prevCar) => ({
			...prevCar,
			[name]: value,
		}))
	}

	const handleFileChange = (e) => {
		setCarPhotos(Array.from(e.target.files))
	}

	const handleAddCar = async (e) => {
		e.preventDefault()

		const formData = new FormData()
		Object.keys(newCar).forEach((key) => {
			formData.append(key, newCar[key])
		})

		carPhotos.forEach((photo) => {
			formData.append('image_path[]', photo)
		})

		try {
			const response = await axiosInstance.post('/admin/cars', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})

			const addedCar = response.data.data
			setCars((prevCars) => [...prevCars, addedCar])
			setOpenAdd(false)
			setNewCar({
				name: '',
				car_class: '',
				brand: '',
				color: '',
				engine_type: '',
				engine_power: '',
				wheel_drive: '',
				zero_to_full: '',
				price: '',
			})
			setCarPhotos([])
			fetchCars()
			toast.success('Автомобіль додано!')
		} catch (error) {
			let errorMessage = 'Щось пішло не так, спробуйте ще раз.'
			if (error.response?.data?.errors) {
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

	const handleEditCar = async (e) => {
		e.preventDefault()

		const formData = new FormData()
		Object.keys(currentCar).forEach((key) => {
			formData.append(key, currentCar[key])
		})

		carPhotos.forEach((photo) => {
			formData.append('image_path[]', photo)
		})

		try {
			await axiosInstance.post(`/admin/cars/${currentCar.id}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})

			fetchCars()
			setOpenEdit(false)
			toast.success('Автомобіль змінено!')
		} catch (error) {
			let errorMessage = 'Щось пішло не так, спробуйте ще раз.'
			if (error.response?.data?.errors) {
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

	const handleDeleteCar = async (carId) => {
		try {
			await axiosInstance.delete(`/admin/cars/${carId}`)
			setCars(cars.filter((car) => car.id !== carId))
		} catch (error) {
			console.error('Error deleting car:', error)
		}
	}

	const carImage = (car) => {
		return car.image_path &&
			Array.isArray(car.image_path) &&
			car.image_path.length > 0
			? `${axiosInstance.defaults.baseURL}/getImage/${car.image_path[0]}`
			: ''
	}

	useEffect(() => {
		fetchCars()
	}, [])

	const handleRemovePhoto = (index) => {
		const updatedPhotos = carPhotos.filter((_, i) => i !== index)
		setCarPhotos(updatedPhotos)
	}

	return (
		<div className="admin">
			<div className="admin__button-add" onClick={handleClickOpenAdd}>
				Додати авто
			</div>
			<AddCarForm
				open={openAdd}
				handleClose={handleCloseAdd}
				handleAddCar={handleAddCar}
				newCar={newCar}
				handleChange={handleNewCarChange}
				handleFileChange={handleFileChange}
				carPhotos={carPhotos}
				handleRemovePhoto={handleRemovePhoto}
			/>
			{currentCar && (
				<EditCarForm
					open={openEdit}
					handleClose={handleCloseEdit}
					handleEditCar={handleEditCar}
					currentCar={currentCar}
					handleChange={handleCurrentCarChange}
					handleFileChange={handleFileChange}
					carPhotos={carPhotos}
				/>
			)}
			<CarsTable
				cars={cars}
				handleDeleteCar={handleDeleteCar}
				handleEditCar={handleClickOpenEdit}
				carImage={carImage}
			/>
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
