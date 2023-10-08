const express = require('express')
const morgan  = require('morgan')
const dotenv = require('dotenv')
const connectDB = require('./config/config')
require('colors')

//config dotenv
dotenv.config();

//connection mongodb
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

app.get('/', (req, res) => {
    res.send("<h1>Hello from node server</h1>")
})

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server Running On ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`
      .bgMagenta.white
  );
});