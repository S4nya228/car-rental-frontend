import React from 'react'
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Select,
	MenuItem,
	InputLabel,
	FormControl,
	Box,
	Button,
	IconButton,
} from '@mui/material'
import { X } from 'react-bootstrap-icons'

export default function AddCarForm({
	open,
	handleClose,
	handleAddCar,
	newCar,
	handleChange,
	handleFileChange,
	carPhotos,
	handleRemovePhoto,
}) {
	const isImageFile = (file) => {
		return file instanceof Blob || file instanceof File
	}

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Додати авто</DialogTitle>
			<form onSubmit={handleAddCar}>
				<DialogContent>
					<TextField
						margin="dense"
						name="name"
						label="Назва"
						type="text"
						fullWidth
						variant="standard"
						value={newCar.name}
						onChange={handleChange}
						required
					/>
					<FormControl fullWidth margin="dense">
						<InputLabel>Клас авто</InputLabel>
						<Select
							name="car_class"
							value={newCar.car_class}
							onChange={handleChange}
							variant="standard"
							required
						>
							<MenuItem value="1">Бізнес</MenuItem>
							<MenuItem value="2">Кабріолет</MenuItem>
							<MenuItem value="3">Купе</MenuItem>
							<MenuItem value="4">Електрокар</MenuItem>
							<MenuItem value="5">Мінівен</MenuItem>
							<MenuItem value="6">Позашляховик</MenuItem>
							<MenuItem value="7">Преміум</MenuItem>
							<MenuItem value="8">Спорткар</MenuItem>
						</Select>
					</FormControl>
					<TextField
						margin="dense"
						name="brand"
						label="Бренд"
						type="text"
						fullWidth
						variant="standard"
						value={newCar.brand}
						onChange={handleChange}
						required
					/>
					<TextField
						margin="dense"
						name="color"
						label="Колір"
						type="text"
						fullWidth
						variant="standard"
						value={newCar.color}
						onChange={handleChange}
						required
					/>
					<FormControl fullWidth margin="dense">
						<InputLabel>Тип двигуна</InputLabel>
						<Select
							name="engine_type"
							value={newCar.engine_type}
							onChange={handleChange}
							variant="standard"
							required
						>
							<MenuItem value="0">Бензин</MenuItem>
							<MenuItem value="1">Дизель</MenuItem>
							<MenuItem value="2">Електрика</MenuItem>
							<MenuItem value="3">Гібрид</MenuItem>
						</Select>
					</FormControl>
					<TextField
						margin="dense"
						name="engine_power"
						label="Потужність"
						type="text"
						fullWidth
						variant="standard"
						value={newCar.engine_power}
						onChange={handleChange}
						required
					/>
					<FormControl fullWidth margin="dense">
						<InputLabel>Привід</InputLabel>
						<Select
							name="wheel_drive"
							value={newCar.wheel_drive}
							onChange={handleChange}
							variant="standard"
							required
						>
							<MenuItem value="1">Повний привід</MenuItem>
							<MenuItem value="2">Передній привід</MenuItem>
							<MenuItem value="3">Задній привід</MenuItem>
						</Select>
					</FormControl>
					<TextField
						margin="dense"
						name="zero_to_full"
						label="0-100 км/год"
						type="number"
						fullWidth
						variant="standard"
						value={newCar.zero_to_full}
						onChange={handleChange}
						required
					/>
					<TextField
						margin="dense"
						name="price"
						label="Ціна"
						type="number"
						fullWidth
						variant="standard"
						value={newCar.price}
						onChange={handleChange}
						required
					/>
					<Box mt={2}>
						<input
							accept="image/*"
							id="upload-photo"
							multiple
							type="file"
							onChange={handleFileChange}
						/>
					</Box>
					<Box mt={2}>
						{carPhotos.length > 0 && (
							<div>
								{carPhotos.map((photo, index) => (
									<div
										key={index}
										style={{
											display: 'inline-block',
											position: 'relative',
											margin: '5px',
										}}
									>
										<img
											src={
												isImageFile(photo) ? URL.createObjectURL(photo) : photo
											}
											alt={`car-photo-${index}`}
											style={{
												width: '100px',
												height: '100px',
												objectFit: 'cover',
												borderRadius: '4px',
											}}
										/>
										<IconButton
											size="small"
											onClick={() => handleRemovePhoto(index)}
											style={{
												position: 'absolute',
												top: 0,
												right: 0,
												backgroundColor: 'rgba(255, 255, 255, 0.8)',
											}}
										>
											<X />
										</IconButton>
									</div>
								))}
							</div>
						)}
					</Box>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary">
						Скасувати
					</Button>
					<Button type="submit" color="primary">
						Зберегти
					</Button>
				</DialogActions>
			</form>
		</Dialog>
	)
}
