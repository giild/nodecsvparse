const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (data) => 
    results.push(data)
  )
  .on('end', () => {
    console.log(results);
    jsonstring = JSON.stringify(results)
    fs.writeFile('data.json', jsonstring, function (err) {
        if (err) return console.log(err);
      });
  });

