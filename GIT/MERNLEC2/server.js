const express = require('express');
const mongoose = require('mongoose');
const port = 789;
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err) throw err;
    console.log('mongoDB Connected');
})
const Home = require('./routes/todoRoutes');
app.use('/', Home);
app.listen(port, (req, res) => {
    console.log(`Server is Running on http://localhost:${port}`);

})