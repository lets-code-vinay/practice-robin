//new file with uppercase named lorem2.txt will be created automatically



const fs = require('fs');
const file = fs.readFileSync('lorem.txt','utf8')


    fs.writeFile('lorem2.txt', file.toString().toUpperCase(), function(err) {
        if (err) {
           return console.error(err);
        }
        console.log(file)
        console.log("Data written successfully!");
        
        fs.readFile('lorem2.txt', function (err, data) {
           if (err) {
              return console.error(err);
           }
           console.log("Asynchronous read: " + data.toString().toUpperCase());
        });
     });

