const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const upload= require('./multer')
const cloudinary = require('./cloudinary');

const fs = require('fs')
//const multer = require('multer')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//app.use(multer('tiny'));


app.get('/',(req, res) =>{
    res.send('hello world')
    console.log('hello this is get')
})

//making post request
app.use('/upload-images',upload.array('image'), async (req, res)=>{
    const uploader = async(path) => await cloudinary.uploads(path, 'Images')
    if(req.method ==='POST'){
        const urls = []

        const files = req.files
        for(const file of files){
            const {path} = file
            const newPath = await uploader(path)
        
            urls.push(newPath)

            fs.unlinkSync(path)
        }
        res.status(200).json({
            message:"Images uploaded successfuly",
            data:urls
        })
 
    } else{
        res.status(405).json({
            err:" Images not uploaded succeefully"
        })
    }
})

const port = process.env.PORT|| 1111;
app.listen(port, ()=> console.log(`Server is running on port : ${port}`));

