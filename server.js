import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/db.js';
import categoryRoutes from './routes/categoryRoute.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()

connectDB();

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*')
    next();
});

app.use(express.json())
app.use(morgan('dev'))

app.use("/category", categoryRoutes);
app.use("/products", productRoutes);


app.get('/', (req, res) => {
    res.send({
        message: 'welcome to E-Commerce app'
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

