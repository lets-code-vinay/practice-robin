const dotenv = require('dotenv');
dotenv.config();
const cloudinary = require('cloudinary');


cloudinary.config({
    cloud_name: process.env.cloud_name, //hiding credentials
    api_key:process.env.api_key,
    api_secret : process.env.api_secret
});

//Function to uplaod the files
exports.uploads = (file, folder)=>{
    return new Promise(resolve =>{
        cloudinary.uploader.upload(file, (result) =>{
            resolve({
                url:result({
                    url:result.url, 
                    id: result.public_id
                })
            }, {
                resource_type: "auto",
                folder: folder // the uplaods names folder
            })
        })
    })
}

