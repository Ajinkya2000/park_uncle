require('dotenv').config();
require("./db/mongoose");
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const markerRoutes = require('./routes/marker');
const emailRoute = require('./routes/email');

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api', authRoutes);
app.use('/api', markerRoutes);
app.use('/api', emailRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`)
})