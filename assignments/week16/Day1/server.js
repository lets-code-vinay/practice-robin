const cloudinary = require('./cloudinary')
//const cloudinary = require('cloudinary').v2    //v2 is version
const express = require('express');
const app= express();
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const upload = multer();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.json());
        //upload is getting from multer method
        //upload.array() used to upload multiple images with key value ('image')

app.get('/', (req, res) =>{
    res.send("hello world")
});

//Uplaoding multiple files
app.use('/upload-images', upload.array('image'), async( req, res)=>{
    const uploader = async(path) => await cloudinary.uploads(path, 'Images')
    if(req.method === 'POST')
    {
        const urls= []
        const files = req.files
        for(const file of files){
            const {path} = file
            const newPath = await uploader(path)
            urls.push(newPath)

            fs.unlinkSync(path)   //delete after uploading from server
        }
        res.status(200).json({
            message:'Images uploaded succespuly',
            data:urls
        })
    } else{
        res.status(405).json({
            err:"Images not upload successfuly"
        })
    }
})   

//  cloudinary.config({
//      cloud_name:'ddjbu4u8c',
//      api_key:'679666363715424',
//      api_secret:'UUiix-mjlj4iD3A8Ii3lIVJMGGo'
//  });


const port= process.env.PORT|| 2222;
app.listen(port,() => console.log(`on the server ${port}`))