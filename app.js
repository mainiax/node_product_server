const express = require('express');
const productRoutes = require('./routes/productsRoute');
const app = express();
//1)
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// app.use((req, res, next) => {
// 	console.log('Hello from the middleware 👋');
// 	next();
// });

// app.use((req, res, next) => {
// 	req.requestTime = new Date().toISOString();
// 	next();
// });
app.use('/api/v1/products', productRoutes);
module.exports = app;
