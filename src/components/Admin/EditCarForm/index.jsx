import React from 'react'
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Box,
	Button,
	FormControl,
	Select,
	MenuItem,
	InputLabel,
} from '@mui/material'

export default function EditCarForm({
	open,
	handleClose,
	handleEditCar,
	currentCar = {
		name: '',
		car_class: '',
		brand: '',
		color: '',
		engine_type: '',
		engine_power: '',
		wheel_drive: '',
		zero_to_full: '',
		price: '',
	},
	handleChange,
	handleFileChange,
	carPhotos = [],
}) {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Редагувати авто</DialogTitle>
			<form onSubmit={handleEditCar}>
				<DialogContent>
					<TextField
						margin="dense"
						name="name"
						label="Назва"
						type="text"
						fullWidth
						variant="standard"
						value={currentCar.name}
						onChange={handleChange}
						required
					/>
					<FormControl fullWidth margin="dense">
						<InputLabel>Клас авто</InputLabel>
						<Select
							name="car_class"
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
						value={currentCar.brand}
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
						value={currentCar.color}
						onChange={handleChange}
						required
					/>
					<FormControl fullWidth margin="dense">
						<InputLabel>Тип двигуна</InputLabel>
						<Select
							name="engine_type"
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
						value={currentCar.engine_power}
						variant="standard"
						onChange={handleChange}
						required
					/>
					<FormControl fullWidth margin="dense">
						<InputLabel>Привід</InputLabel>
						<Select
							name="wheel_drive"
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
						type="text"
						fullWidth
						variant="standard"
						value={currentCar.zero_to_full}
						onChange={handleChange}
						required
					/>
					<TextField
						margin="dense"
						name="price"
						label="Ціна"
						type="text"
						fullWidth
						variant="standard"
						value={currentCar.price}
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
									<img
										key={index}
										src={URL.createObjectURL(photo)}
										alt={`new-car-photo-${index}`}
										style={{ width: 100, marginRight: 10 }}
									/>
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
