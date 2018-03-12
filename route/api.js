let express = require('express');
let multer = require('multer');
let apiRoute = express.Router();
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
/* Route to handle file upload*/
apiRoute.post('/upload' , function(reqest,response){
upload(req,res,function(err){
    if(err){
        res.json({
            error: err
        })
        return;
    }
})
})
module.exports = apiRoute;

