let express =require('express');
let bodyParser =require('body-parser');
let morgan = require('morgan');
let multer = require('multer');
let cors = require('cors');
let app = express()
let port = process.env.port | 8000
app.use(bodyParser.json());
app.use(cors());

//file storage to disk using diskStorage engine
let storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../uploads')
    },
    filename: function(req,file,cb){
        cb(null,file.fieldname +'-'+ Date.now() + '.' + 
        file.originalname.split('.')[file.originalname.split('.').length -1]);

    }
})
let upload = multer({storage:storage}).single('file');
app.listen(port,function(err){
    if(err) return;
console.log("app listening on port " + port);
})