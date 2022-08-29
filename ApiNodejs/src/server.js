require("dotenv").config({path:'variaveis.env'});
const express = require('express');
const  cors = require('cors');
const bodyParser = require("body-parser");

const routers = require('./routers');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended:false}));
server.use('/api', routers);

server.listen(process.env.PORT,()=>{console.log(`http://localhost:${process.env.PORT}`)});