// File will be created automatically

const fs = require('fs');

const file = fs.readFileSync('randompara.txt', 'utf8')
//console.log(file)

fs.writeFile('loremFile.txt', file.toString(), function(err){
    if (err){
       return console.error(err)
    }
    fs.readFile('loremFile.txt', function(err, data){
        if(err){
            return    console.error(err)
        }
        console.log('Data is printing here', data.toString());
    })

})