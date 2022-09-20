import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyparser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';

import categoryRoute from './routes/category.js';
import productRoute from './routes/product.js';
import orderRoute from './routes/order.js';

dotenv.config();

const app = express();

const connectionString = "mongodb://localhost:27017/product_demo";
// const cloudConnectionString = `mongodb+srv://${process.env.UNAME}:${process.env.PASS}@< CLUSTER_NAME>/<DB_NAME>?retryWrites=true&w=majority`;

app.use(cors());
app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));
app.use(express.json());
app.use(helmet());
app.use(morgan('API :method :url, Status :status, Length :res[content-length] - Time :response-time ms'))

app.get("/", (req, res) => {
    res.send("Server is running.");
});

app.use('/api/category', categoryRoute);
app.use('/api/product', productRoute);
app.use('/api/order', orderRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is listning at port ${process.env.PORT}`);
        })
    })
    .catch((error) => { console.log(error) })

