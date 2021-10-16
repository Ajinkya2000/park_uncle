require('dotenv').config();
require("./db/mongoose");
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`)
})