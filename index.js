let express =require('express');
let bodyParser =require('body-parser');
let morgan = require('morgan');
let multer = require('multer');
let cors = require('cors');
let app = express()
let port = process.env.port | 8000
app.use(bodyParser.json());
app.use(cors());
let apiRoute = require('./route/api');
app.use('/api' , apiRoute);
app.listen(port,function(err){
    if(err) return;
console.log("app listening on port " + port);
})