const express = require('express');
const PORT = 7000;
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI,{useUnifiedTopology:true,useNewUrlParser:true},(err) => {
    if(err) throw err;
    console.log('mongodb connected');
})
const home = require('./routes/todoRoutes');
app.use('/', home);
app.listen(PORT,() => console.log(`Server is Running on http://localhost:${PORT}`))


