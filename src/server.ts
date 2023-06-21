import express from 'express'
import 'dotenv/config'

const PORT = process.env.PORT || 3000

const app = express()
const a = 5
const b = 6
app.listen(PORT, () => {
	console.log('Server is running at', PORT)
})
