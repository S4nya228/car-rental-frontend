import * as React from 'react'
import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import './index.scss'
import {
	Button,
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
} from '@mui/material'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: theme.palette.action.hover,
	},
	'&:last-child td, &:last-child th': {
		border: 0,
	},
}))

function createData(
	klass,
	brand,
	color,
	engineType,
	power,
	drive,
	acceleration,
	price,
	photos
) {
	return {
		klass,
		brand,
		color,
		engineType,
		power,
		drive,
		acceleration,
		price,
		photos,
	}
}

const rows = [
	createData(
		'SUV',
		'Toyota',
		'Red',
		'Hybrid',
		'200 hp',
		'AWD',
		'8.2 s',
		'$30,000',
		['/src/assets/Swiper/BMW M5 F90.PNG']
	),
	// Додайте більше даних за необхідності
]

export default function AdminCars() {
	const [open, setOpen] = React.useState(false)
	const [newCar, setNewCar] = React.useState({
		klass: '',
		brand: '',
		color: '',
		engineType: '',
		power: '',
		drive: '',
		acceleration: '',
		price: '',
		photos: [],
	})

	const handleClickOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setNewCar({ ...newCar, [name]: value })
	}

	const handleFileChange = (e) => {
		const files = e.target.files
		const photoURLs = []
		for (let i = 0; i < files.length; i++) {
			const file = files[i]
			const reader = new FileReader()
			reader.onloadend = () => {
				photoURLs.push(reader.result)
				if (photoURLs.length === files.length) {
					setNewCar({ ...newCar, photos: photoURLs })
				}
			}
			if (file) {
				reader.readAsDataURL(file)
			}
		}
	}

	const handleAddCar = () => {
		if (newCar.photos.length < 3) {
			alert('Додайте мінімум 3 фотографії')
			return
		}
		rows.push(
			createData(
				newCar.klass,
				newCar.brand,
				newCar.color,
				newCar.engineType,
				newCar.power,
				newCar.drive,
				newCar.acceleration,
				newCar.price,
				newCar.photos
			)
		)
		setOpen(false)
		setNewCar({
			klass: '',
			brand: '',
			color: '',
			engineType: '',
			power: '',
			drive: '',
			acceleration: '',
			price: '',
			photos: [],
		})
	}

	return (
		<div className="admin">
			<div className="admin__button-add" onClick={handleClickOpen}>
				Додати авто
			</div>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>Додати нове авто</DialogTitle>
				<form onSubmit={handleAddCar}>
					<DialogContent>
						<FormControl fullWidth margin="dense">
							<InputLabel>Клас авто</InputLabel>
							<Select
								name="klass"
								value={newCar.klass}
								onChange={handleChange}
								variant="standard"
								required
							>
								<MenuItem value="SUV">SUV</MenuItem>
								<MenuItem value="Sedan">Sedan</MenuItem>
								<MenuItem value="Coupe">Coupe</MenuItem>
								{/* Додайте більше опцій за необхідності */}
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
								name="engineType"
								value={newCar.engineType}
								onChange={handleChange}
								variant="standard"
								required
							>
								<MenuItem value="Gasoline">Gasoline</MenuItem>
								<MenuItem value="Diesel">Diesel</MenuItem>
								<MenuItem value="Hybrid">Hybrid</MenuItem>
								<MenuItem value="Electric">Electric</MenuItem>
								{/* Додайте більше опцій за необхідності */}
							</Select>
						</FormControl>
						<TextField
							margin="dense"
							name="power"
							label="Потужність"
							type="text"
							fullWidth
							variant="standard"
							value={newCar.power}
							onChange={handleChange}
							required
						/>
						<FormControl fullWidth margin="dense">
							<InputLabel>Привід</InputLabel>
							<Select
								name="drive"
								value={newCar.drive}
								onChange={handleChange}
								variant="standard"
								required
							>
								<MenuItem value="AWD">AWD</MenuItem>
								<MenuItem value="RWD">RWD</MenuItem>
								<MenuItem value="FWD">FWD</MenuItem>
								{/* Додайте більше опцій за необхідності */}
							</Select>
						</FormControl>
						<TextField
							margin="dense"
							name="acceleration"
							label="0-100 км/год"
							type="text"
							fullWidth
							variant="standard"
							value={newCar.acceleration}
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
							value={newCar.price}
							onChange={handleChange}
							required
						/>
						<Box marginBottom={2} display="flex" alignItems="center">
							<input
								type="file"
								accept="image/*"
								multiple
								onChange={handleFileChange}
								style={{ display: 'none' }}
								id="upload-photo"
								required
							/>
							<label htmlFor="upload-photo">
								<Button variant="outlined" component="span">
									Завантажити фото
								</Button>
							</label>
							<div style={{ marginLeft: '10px' }}>
								{newCar.photos.map((photo, index) => (
									<img
										key={index}
										src={photo}
										alt={`Car ${index}`}
										style={{ width: 100, height: 'auto', marginRight: 10 }}
									/>
								))}
							</div>
						</Box>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose}>Скасувати</Button>
						<Button type="submit">Додати</Button>
					</DialogActions>
				</form>
			</Dialog>

			<TableContainer
				className="admin__cars-view"
				component={Paper}
				sx={{ maxHeight: 750 }}
			>
				<Table
					className="admin__wrapper"
					stickyHeader
					sx={{ minWidth: 700 }}
					aria-label="customized table"
				>
					<TableHead>
						<TableRow>
							<StyledTableCell>Клас авто</StyledTableCell>
							<StyledTableCell align="right">Бренд</StyledTableCell>
							<StyledTableCell align="right">Колір</StyledTableCell>
							<StyledTableCell align="right">Тип двигуна</StyledTableCell>
							<StyledTableCell align="right">Потужність</StyledTableCell>
							<StyledTableCell align="right">Привід</StyledTableCell>
							<StyledTableCell align="right">0-100 км/год</StyledTableCell>
							<StyledTableCell align="right">Ціна</StyledTableCell>
							<StyledTableCell align="right">Фото</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row, index) => (
							<StyledTableRow key={index}>
								<StyledTableCell component="th" scope="row">
									{row.klass}
								</StyledTableCell>
								<StyledTableCell align="right">{row.brand}</StyledTableCell>
								<StyledTableCell align="right">{row.color}</StyledTableCell>
								<StyledTableCell align="right">
									{row.engineType}
								</StyledTableCell>
								<StyledTableCell align="right">{row.power}</StyledTableCell>
								<StyledTableCell align="right">{row.drive}</StyledTableCell>
								<StyledTableCell align="right">
									{row.acceleration}
								</StyledTableCell>
								<StyledTableCell align="right">{row.price}</StyledTableCell>
								<StyledTableCell align="right">
									{row.photos.map((photo, index) => (
										<img
											key={index}
											src={photo}
											alt={`Car ${index}`}
											style={{ width: 100, marginRight: 10 }}
										/>
									))}
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	)
}
