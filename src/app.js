const express = require('express');
const morgan = require('morgan');
const app = express();

// Imports Routes
const carrierRoutes = require('./routes/carrier.route');
const shipmentRoutes = require('./routes/shipment.route');
const orderRoutes = require('./routes/order.router');


// Middleware
app.use(express.json());
app.use(morgan('dev'));

// use routes
app.use('/api', carrierRoutes);
app.use('/api', shipmentRoutes);
app.use('/api', orderRoutes);

module.exports = app