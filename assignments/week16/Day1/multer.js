const multer = require('multer');

//Specify the storage engine

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'./uploads/')  //specifying the folder
    },
    filename: function(req, file, cb){ //setting the file name
        cb(null,  Datenow().toISOString() + '_' + file.originalname)
    }
})

//file validation
const fileFilter= (req, file, cb)=>{
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
        cb(null, true)
    } else {
        //prevent to upload
        cb({message:'Unsupported File Format'}, false)
    }
};

//Uploading
const upload= multer({
    storage: storage, // get from const storage
    limits:{fileSize: 1024* 1024},
    fileFilter: fileFilter
})

module.exports= upload;