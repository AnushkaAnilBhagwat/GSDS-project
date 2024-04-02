import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';

dotenv.config()

const app = express();

app.get('/', (req, res) => {
    res.send({
        message: 'welcome to E-Commerce app'
    })
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

