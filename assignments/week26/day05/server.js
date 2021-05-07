let express = require('express');
let path = require('path');


// inttiate
const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'));
});


app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, './client/dashboard.html'));
});


// listening
app.listen(3000, console.log("Server is running..."))