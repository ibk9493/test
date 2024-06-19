const fs = require('fs').promises;

// Read a file with promises
fs.readFile('../csvs/example.txt')
  .then(data => {
    console.log(data.toString());
  })
  .catch(err => {
    console.error(err);
  });

// Write to a file with promises
fs.writeFile('example.txt', 'Hello, World!')
  .then(() => {
    console.log('File written successfully');
  })
  .catch(err => {
    console.error(err);
  });