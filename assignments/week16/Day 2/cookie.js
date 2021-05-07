const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/', (req, res)=>{
//    res.cookie('cookiename', 'CookieValueIsVinay').send('Cookie has been set ')
res.cookie('cookien', 'CookieValueIsVinay', {expire: Date.now() +600000}).send('Cookie has been set ')
})

//To show cookie
app.get('/show', (req, res)=>{
    res.send(req.cookies)
})

//To delete cookies
app.get('/del', (req, res)=>{
    res.clearCookie('cookiename').send('Cookiename has been deleted')
})

const port = process.env.PORT|| 1212;
app.listen(port, ()=> console.log(`---The server is running on port : ${port}---`))
