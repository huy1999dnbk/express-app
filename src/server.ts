import express, { Request, Response, NextFunction } from 'express'
import 'dotenv/config'

const PORT = process.env.PORT || 4000

const app = express()

app.get('/', (req: Request, res: Response, next: NextFunction) => {
	res.send('hello world')
})

app.listen(PORT, () => {
	console.log('Server is running at', PORT)
})
