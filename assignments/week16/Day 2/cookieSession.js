const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session')
const morgan= require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(session({secret:'anystringoftext',
                    saveUninitalized: true,
                    resave: true            
}));

app.use('/session', (req, res)=>{
    res.send('Our first Express program!!');
    //res.cookie('cookien', 'CookieValueIsVinay', {expire: Date.now() +600000}).send('Cookie has been set ')
    console.log(req.cookies);
    console.log('====================');
    console.log(req.session);
})
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

const port = process.env.PORT|| 1111;
app.listen(port, ()=> console.log(`---The server is running on port : ${port}---`))
