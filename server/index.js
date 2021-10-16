require('dotenv').config();
require("./db/mongoose");
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors())

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server Running on PORT: ${PORT}`)
})