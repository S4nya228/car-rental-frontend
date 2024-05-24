import React from 'react'
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	TextField,
	Box,
	Button,
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
					<div style={{ marginTop: 16 }}>
						<label>Клас авто</label>
						<select
							name="car_class"
							value={currentCar.car_class.id || ''}
							onChange={handleChange}
							required
							style={{ width: '100%', padding: '8px', marginTop: '8px' }}
						>
							<option value="1">Бізнес</option>
							<option value="2">Кабріолет</option>
							<option value="3">Купе</option>
							<option value="4">Електрокар</option>
							<option value="5">Мінівен</option>
							<option value="6">Позашляховик</option>
							<option value="7">Преміум</option>
							<option value="8">Спорткар</option>
						</select>
					</div>
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
					<div style={{ marginTop: 16 }}>
						<label>Тип двигуна</label>
						<select
							name="engine_type"
							value={currentCar.engine_type.id || ''}
							onChange={handleChange}
							required
							style={{ width: '100%', padding: '8px', marginTop: '8px' }}
						>
							<option value="0">Бензин</option>
							<option value="1">Дизель</option>
							<option value="2">Електрика</option>
							<option value="3">Гібрид</option>
						</select>
					</div>
					<TextField
						margin="dense"
						name="engine_power"
						label="Потужність"
						type="text"
						fullWidth
						variant="standard"
						value={currentCar.engine_power}
						onChange={handleChange}
						required
					/>
					<div style={{ marginTop: 16 }}>
						<label>Привід</label>
						<select
							name="wheel_drive"
							value={currentCar.wheel_drive.id || ''}
							onChange={handleChange}
							required
							style={{ width: '100%', padding: '8px', marginTop: '8px' }}
						>
							<option value="1">Повний привід</option>
							<option value="2">Передній привід</option>
							<option value="3">Задній привід</option>
						</select>
					</div>
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
										alt={`car-photo-${index}`}
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
