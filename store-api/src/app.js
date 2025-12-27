
import productRoutes from './routes/products.route.js';
import express from 'express';
var app = express();

app.use('/products', productRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
})

export default app;