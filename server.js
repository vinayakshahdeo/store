require('dotenv').config();
//async errors
require('express-async-errors');
const express = require('express');

const app = express();


const notFoundMiddleware = require('./middleware/notFound')
const errorMiddleware = require('./middleware/errorHandler')

const connectDB = require('./db')

const productsRouter = require('./routes/products')
//middlewares
app.use(express.json());

app.use('/api/v1/products', productsRouter);

//products route

app.get('/', (req, res) => {
	res.send(`<h1>store apis </h1>`)
})

const port = process.env.port || 5000;

//products routes

app.use(notFoundMiddleware);
app.use(errorMiddleware)

const start = async () => {
	try {
		//connect db
		await connectDB(process.env.MONGO_URI)
		app.listen(port, console.log(`Server is listening on ${port}`))
	} catch (error) {

	}
}
start();