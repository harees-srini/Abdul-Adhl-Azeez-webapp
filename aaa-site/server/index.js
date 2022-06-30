const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const routesUrls = require('./routes/routes');
const PORT = process.env.PORT || 4000;
const cors = require('cors');

dotenv.config();

const app = express();

// mongoose.connect("mongodb+srv://nein:nein@cluster0.mrpwi.mongodb.net/test?retryWrites=true&w=majority", process.env.DATABASE_ACCESS, () => console.log("Database connected!"))
mongoose.connect("mongodb://nein:nein@cluster0-shard-00-00.mrpwi.mongodb.net:27017,cluster0-shard-00-01.mrpwi.mongodb.net:27017,cluster0-shard-00-02.mrpwi.mongodb.net:27017/newtablen?ssl=true&replicaSet=atlas-xa3wgk-shard-0&authSource=admin&retryWrites=true&w=majority");

app.use(express.json());
app.use(cors());
app.use('/app', routesUrls);

app.listen(4000, () =>{
    console.log(`Server listening on $(PORT)`);
})
