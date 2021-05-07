const multer = require('multer');

//Specify storage iEngine


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, './uploads/')
    },
    filename: function(req, file, cb){
        cb(null, Date.now()+'_' + file.originalname)
    }
})

//File validation

const fileFilter = (req, file, cb) =>{
    if(file.mimetype  === 'image/jpeg' || file.mimetype ==='image/png'){
        cb(null, true)
    }
    else{
        //prevent to upload
        cb({message:'Unsupported File Format'}, false )
    }
}

//Attaching storage
const upload = multer({
    storage: storage,
    limits: {fileSize: 1024 * 1024},
    fileFilter: fileFilter
})

module.exports = upload;